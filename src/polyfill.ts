import * as process from "process/browser";

(window as any).process = process;
(window as any).assert = console.assert;
