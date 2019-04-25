#!/usr/bin/env node

"use strict"
let mds;
let mdv;
let TexDir = process.argv[2];
let result;
process.argv.forEach(element => {
    if (element == "--validate") {
        mdv = "1";
        result = "1";
    }
    if (element == "--stats") {
        mds = "1";
        result = "2"
    }
});
if (mdv == mds) { result = "3" };

console.log(result);
console.log(process.argv);



/* Lee archivo en terminal
const fs = require('fs');
fs.readFile('./README.md', 'utf-8', (err, data) => {
    if (err) {
        throw err;
    }
    console.log(data);
});*/