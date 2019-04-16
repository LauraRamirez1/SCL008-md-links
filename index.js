#!/usr/bin/env node

/* ejercicio 16 abril
const mdLinks = require('./md-links');
console.log(mdLinks.add(2, 2))
console.log(mdLinks.multiply(3, 5))*/


// Extrae la extensión del archivo
const path = require('path')
const ext = path.extname('README.md')
console.log(ext);

// Lee archivo en terminal
const fs = require('fs');
fs.readFile('./README.md', 'utf-8', (err, data) => {
    if (err) {
        throw err;
    }
    console.log(data);
});

//Extrae links
const markdownLinkExtractor = require('markdown-link-extractor');
const markdown = fs.readFileSync('README.md').toString();
const links = markdownLinkExtractor(markdown);
links.forEach(function(link) {
    console.log(link);
});