const FileHound = require('filehound');
const markdownLinkExtractor = require('markdown-link-extractor');
const fs = require('fs');
const fetch = require('node-fetch');
const index = require("./index.js");
const path = require("path");
let Outnode = [];
const files = FileHound.create()
    .paths(process.argv[2])
    .ext('md')
    .find();

files.then(res => {
    Outnode = removeNodeModulesMdFiles(res)
    Outnode.then(values => {
        values.forEach(function(element) {
            let fileIn = element;
            readLinks(element, "utf-8")
                .then(res => {
                    const links = markdownLinkExtractor(res)
                    switch (index.valStas) {
                        case 0:
                            console.log(fileIn)
                            console.log(links);
                            break;
                        case 1:
                            links.forEach(function(link) {
                                fetch(link).then((res) => {
                                    let liks1 = {}
                                    liks1.link = res.url;
                                    liks1.status = res.status + " " + res.statusText;
                                    console.log(liks1);
                                });
                            });
                            break;
                        case 2:
                            {

                                let stats = {
                                    LinksTotal: 0,
                                    LinksUnique: 0,
                                };

                                stats.LinksTotal = links.length;
                                let LinksUnique = [];

                                links.forEach((element) => {
                                    if (!LinksUnique.includes(element.links)) {
                                        LinksUnique.push(element.link);
                                    }

                                })
                                stats.LinksUnique = LinksUnique.length;
                                console.log(fileIn)
                                console.log(stats)
                            };

                            break;

                        case 3:
                            console.log("Faltan estadisticas");
                            links.forEach(function(link) {
                                fetch(link).then((res) => {
                                    let liks1 = {}
                                    liks1.link = res.url;
                                    liks1.status = res.status + " " + res.statusText;
                                    console.log(liks1);
                                    //if (element.status >= 400) {
                                    //    stats.LinksBroken = stats.LinksBroken + 1;
                                    //}

                                });
                            });
                            break;
                    }
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