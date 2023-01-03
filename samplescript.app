// This script is targeted for the early automation phase, before all perks are unlocked.

// constants:
// ec11ts: 11,21,22,31,32,41,42,51,61,62,71,81,91,101,111,121,131,141,151,161,171,181,191,192,193,211,213,222,225,231,233
// aa: 11,22,32,42,51,61,71,81,91,101,111,121,131,141,151,161,171|0
// ia: 11,22,32,42,51,61,72,82,92,102,111,121,131,141,151,161,171
// ta: 11,22,32,42,51,61,73,83,93,103,111,121,131,141,151,161,171,162|0
// ti: 11,22,32,42,51,61,73,83,93,103,111,123,133,143
// epta: 11,21,22,32,42,62,33,31,41,51,61,62,73,83,93,103,111,121,131,141,151,161,162,171,181,191,212,211,193,214,213,192,201,72,82,92,102,224,232,222,228,234,226,71,81,91,101
// ndil: 11,21,22,31,32,33,41,42,51,61,62,71,81,91,101,111,121,131,141,151,161,162,171,181,191,192,193,201,211,212,213,214,222,223,225,228,232,233,72,82,92,102,73,83,93,103|0
// aa181: 11,22,32,42,51,61,71,81,91,101,111,121,131,141,151,161,171,181|0

// function declarations
function waitForTTTree $amt $studytree {
    if total TT < $amt {
        if total TT > TT {
            eternity respec
        }
        auto eternity 20 s
        while total TT < $amt {
            studies nowait purchase $studytree
            wait eternity
        }
        auto eternity off
    }
}

// same function but default study tree
function waitForTT $amt {
    call waitForTTTree $amt epta
}

// challenge running function
function challenge $num $amt $ttree {
    if ec$num completions < $amt {
        infinity
        eternity respec
        studies nowait purchase $ttree
        unlock ec$num
        studies nowait purchase epta
        start ec$num
        wait pending completions >= $amt
        eternity
    }
}

// function for grinding tp
function tpLoop {
    eternity nowait respec
    studies nowait purchase ndil
    start dilation
    wait pending TP > 0
    pause 10 s
    eternity
}

// function for grinding ep
function epLoop {
    eternity nowait respec
    studies nowait purchase epta
    wait pending EP >= EP
    pause 10 s
    eternity
}

auto infinity 1.2 s
auto eternity OFF

call waitForTTTree 63 aa
call waitForTTTree 100 ia
call waitForTT 150

// begin challenges
call challenge 1 3 ia
call challenge 2 2 ta
call challenge 3 3 aa
call waitForTT 180

call challenge 1 5 ia
call waitForTT 255

call challenge 3 5 aa
call challenge 2 5 ta
call challenge 5 5 ia
call waitForTT 322

call challenge 6 5 ia

// ts181 buyable now
auto infinity off
call waitForTT 405

call challenge 4 5 ti
call waitForTT 600

call challenge 8 2 ti
call waitForTT 660

auto infinity 1.2 s
call challenge 9 3 ta
auto infinity off
call waitForTT 858

call challenge 9 5 ta
call challenge 7 5 aa181
call challenge 10 1 aa181
call waitForTT 2740

call challenge 10 4 aa181
call waitForTT 4135

call challenge 10 5 aa181
call waitForTT 4870

call challenge 11 3 ec11ts
call waitForTT 10000

call challenge 12 5 epta

if DT <= 0 {
	call waitForTT 13000
    studies nowait purchase epta
    unlock dilation
}

while TP < 1e13 {
	call tpLoop
}

call challenge 8 5 ti
call challenge 11 5 ec11ts

while EP < 1e+4000 {
	call epLoop
}

until 69 < 69 {
	call epLoop
	call tpLoop
}
