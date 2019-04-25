const FileHound = require('filehound');
const markdownLinkExtractor = require('markdown-link-extractor');
const fs = require('fs');
const fetch = require('node-fetch');

const files = FileHound.create()
    .paths('/home/laboratoria/Documents/Laura/Prueba')
    .ext('md')
    .find();

files.then(res => {
    let arrayMds = removeNodeModulesMdFiles(res)
    console.log(arrayMds);

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


/*const readLinks = (fileName, type) => {
    return new Promise((resolve, reject) => {
        fs.readFile(fileName, type, (error, content) => {
            error ? reject(error) : resolve(content);

        });
    });
}
readLinks("./README.md", "utf-8")
    .then(res => {
        const links = markdownLinkExtractor(res)
        links.forEach(function(link) {
            fetch(link).then((res) => {
                console.log(res.url + " " + res.status + " " + res.statusText);
            });
        })

    })
    .catch(err => {
        console.log(err);
    });*/