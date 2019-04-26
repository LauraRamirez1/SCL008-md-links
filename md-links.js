const FileHound = require('filehound');
const markdownLinkExtractor = require('markdown-link-extractor');
const fs = require('fs');
const fetch = require('node-fetch');
const index = require("./index.js");
const files = FileHound.create()
    .paths('/home/laboratoria/Documents/Laura/Prueba')
    .ext('md')
    .find();

files.then(res => {
    removeNodeModulesMdFiles(res)
    Promise.all([res]).then(values => {
        values[0].forEach(function(element) {
            readLinks(element, "utf-8")
                .then(res => {
                    const links = markdownLinkExtractor(res)
                    links.forEach(function(link) {
                        fetch(link).then((res) => {
                            console.log(res.url + " " + res.status + " " + res.statusText);
                        });
                    });
                })
                .catch(err => {
                    console.log(err);
                })
        });
    });
});
const removeNodeModulesMdFiles = (arr) => {
    return new Promise((resolve, reject) => {
        const result = arr.filter(element => {
            if (!element.includes("node")) {
                return element;
            }
        });
        resolve(result);
    });
};
const readLinks = (fileName, type) => {
    return new Promise((resolve, reject) => {
        fs.readFile(fileName, type, (error, content) => {
            error ? reject(error) : resolve(content);

        });
    });
}

console.log(index.valStas)