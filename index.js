#!/usr/bin/env node

let mds = 0;
let mdv = 0;
let valStas = 0;
process.argv.forEach(element => {
    if (element == "--validate") {
        mdv = 1;
        valStas = 1;
    }
    if (element == "--stats") {
        mds = 1;
        valStas = 2;
    }
});
if (mdv == mds && mds != 0) { valStas = 3 };

module.exports = {
    valStas
}