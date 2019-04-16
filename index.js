#!/usr/bin/env node

// ejercicio 16 abril
//const mdLinks = require('./md-links');

const fs = require('fs');
/*console.log(mdLinks.add(2, 2))
console.log(mdLinks.multiply(3, 5))*/

/*fs.readFile('./README.md', 'utf-8', (err, data) => {
    if (err) {
        throw err;
    }
    console.log(data);
});*/

const markdownLinkExtractor = require('markdown-link-extractor');
const markdown = fs.readFileSync('README.md').toString();
const links = markdownLinkExtractor(markdown);

links.forEach(function(link) {
    console.log(link);
});