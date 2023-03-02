// Helpful functions and types to convert between A++ and Automator scripts.

import { randomID, type Script } from "./editor/editor";
import { getScriptImport, prefix as APPStart } from "./editor/storage";
import { GameSaveSerializer } from "./serializer";

const scriptStart = "AntimatterDimensionsAutomatorScriptFormat";
const dataStart = "AntimatterDimensionsAutomatorDataFormat";

enum ExportDataType {
    Script, // just script data
    Data, // includes variables
    APP, // automator++ format
    Other, // anything else
}

function getDataType(data: string): ExportDataType {
    if (data.startsWith(scriptStart)) return ExportDataType.Script;
    if (data.startsWith(dataStart)) return ExportDataType.Data;
    if (data.startsWith(APPStart)) return ExportDataType.APP;
    return ExportDataType.Other;
}

interface StudyTreeConstant {
    slot: number;
    name: string;
    data: string;
}

interface DefinedConstant {
    name: string;
    data: string;
}

// has constants and study tree information, like AD
interface ScriptWithConstants {
    name: string;
    studyTrees: StudyTreeConstant[];
    definedConstants: DefinedConstant[];
    text: string;
    id: number; // only appears in A++ scripts, randomized otherwise
}

// Serialize automator data to conform with AD format
// (adapted from AD source)
function serializeAutomatorData(dataArray: string[]): string {
    const paddedNumber = (num: number) => `0000${num}`.slice(-5);
    const segments = [];
    for (const data of dataArray) {
        segments.push(`${paddedNumber(data.length)}${data}`);
    }
    return segments.join("");
}

// AD gives us a certain serialized form, this can deserialize it
// (adapted from AD source)
function deserializeAutomatorData(dataString: string): string[] {
    if (dataString === "")
        throw new Error("Attempted deserialization of empty string");
    const dataArray = [];
    let remainingData = dataString;
    while (remainingData.length > 0) {
        const segmentLength = Number(remainingData.slice(0, 5));
        remainingData = remainingData.substring(5);
        if (
            Number.isNaN(segmentLength) ||
            remainingData.length < segmentLength
        ) {
            throw new Error(
                "Inconsistent or malformed serialized automator data"
            );
        } else {
            const segmentData = remainingData.slice(0, segmentLength);
            remainingData = remainingData.substring(segmentLength);
            dataArray.push(segmentData);
        }
    }
    return dataArray;
}

// takes the constants and turns them into `define constant` statements
function injectConstants(fullScript: ScriptWithConstants): Script {
    let addedDefines = [];

    // we add metadata comments to the end of constants to know what kind they are
    // #!s<slot> is a study tree in slot <slot>
    // #!d is a defined constant
    // #!b<slot> means both

    for (const studyTree of fullScript.studyTrees) {
        // study tree and constants can have the same name, which is problematic
        // i'm assuming that most of the time they'll be the same
        // but if not, we throw out the study tree version, and add a warning
        const duplicate = fullScript.definedConstants.find(
            (c) => c.name === studyTree.name
        );
        if (duplicate) {
            // check values
            if (studyTree.data !== duplicate.data) {
                // add warning if values differ
                addedDefines.push(
                    `#!-------------! Constant ${studyTree.name} is both a constant and a study tree`,
                    `#!>> WARNING <<! preset, with different values! This could cause`,
                    `#!-------------! compilation errors. Please fix this in-game.`
                );
            }

            // use duplicate data
            addedDefines.push(
                `define constant \$${duplicate.name} ${duplicate.data} #!b${studyTree.slot}`
            );
        } else {
            addedDefines.push(
                `define constant \$${studyTree.name} ${studyTree.data} #!s${studyTree.slot}`
            );
        }
    }

    for (const definedConstant of fullScript.definedConstants) {
        const duplicate = fullScript.studyTrees.find(
            (c) => c.name === definedConstant.name
        );
        if (!duplicate) {
            addedDefines.push(
                `define constant \$${definedConstant.name} ${definedConstant.data} #!d`
            );
        }
    }

    if (addedDefines.length > 0) {
        addedDefines = [
            "#! Automatically generated constants",
            "#! Do not modify comments, they keep important metadata",
            ...addedDefines,
            "#! End of defined constants",
        ];
    }

    // just add to start of script
    let fullText =
        (addedDefines.length > 0 ? addedDefines.join("\n") + "\n\n" : "") +
        fullScript.text +
        "\n";

    return {
        name: fullScript.name,
        text: fullText,
        id: fullScript.id,
    };
}

// decodes any type of script (A++, script, script+data)
function decodeScriptWithConstants(data: string): ScriptWithConstants {
    data = data.trim();
    const scriptType = getDataType(data);

    if (scriptType === ExportDataType.Script) {
        const decoded = GameSaveSerializer.decodeText(data, "automator script");
        const [name, text] = deserializeAutomatorData(decoded);
        return {
            name,
            text,
            studyTrees: [],
            definedConstants: [],
            id: randomID(),
        };
    }

    if (scriptType === ExportDataType.Data) {
        const decoded = GameSaveSerializer.decodeText(data, "automator data");
        const [name, trees, defineds, text] = deserializeAutomatorData(decoded);
        console.log(trees, defineds);

        const studyTrees: StudyTreeConstant[] = trees
            .split("*")
            .filter(Boolean)
            .map((t) => {
                const [slot, name, data] = t.split(":");
                return {
                    slot: parseInt(slot),
                    name,
                    data,
                };
            });

        const definedConstants: DefinedConstant[] = defineds
            .split("*")
            .filter(Boolean)
            .map((t) => {
                const [name, data] = t.split(":");
                return {
                    name,
                    data,
                };
            });

        return {
            name,
            text,
            studyTrees,
            definedConstants,
            id: randomID(),
        };
    }

    if (scriptType === ExportDataType.APP) {
        // use other parser
        const script = getScriptImport(data);
        return {
            ...script,
            studyTrees: [],
            definedConstants: [],
        };
    }

    // not a valid script
    return null;
}

export function decodeScript(data: string): Script {
    let constantScript = decodeScriptWithConstants(data);
    if (!constantScript) return null;
    return injectConstants(constantScript);
}
