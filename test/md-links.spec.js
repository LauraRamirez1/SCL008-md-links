const mdLinks = require("./../md-links.js");
const logic = require("./../src/index.js")

/*const testArray = [{
        link: 'https://josefin-ferrada.github.io/project-hackaton/src/index.html',
        title: '<strong>Filmaton</strong>',
        status: 200,
        statustext: 'OK'
    },
    {
        link: 'http://www.omdbapi.com/',
        title: 'OMDB',
        status: 200,
        statustext: 'OK'
    }
];


describe('optionValidate', () => {

    it('si ha ingresado el archivo test.md  y --validate deberia retornar un arreglo con 2 objetos', () => {
        expect(logic.optionValidate('./../test.md')).resolves.toEqual(testArray);
    });

});

describe('optionStat', () => {
    it('si ha ingresado --stat debe retornar un objeto con dos atributos', () => {
        expect(logic.optionStat(testArray)).toEqual({ "total": 2, "unique": 2 })
    });

});

describe('optionValidate and optionStat', () => {
    it('si ha ingresado --stat y --validate al arreglo de prueba deberia retornar un objeto con 3 atributos ', () => {
        expect(logic.optionStatAndValidate(testArray)).toEqual({ "broken": 0, "total": 2, "unique": 2, })
    });
    const mdLinks = require('../');


    describe('mdLinks', () => {

        it('should...', () => {
            console.log('FIX ME!');
        });

    });

});

describe('mdLinks', () => {

    it('si ha ingresado --stat y --validate debe retornconst mdLinks = require('.. / ');


        describe('mdLinks', () => {

            it('should...', () => {
                console.log('FIX ME!');
            });

        }); total, unicos y rotos no como objeto ', async ()=>{
        await expect(mdLinks(testArray, { validate: true, stat: true })).resolves.toEqual({ "broken": 0, "total": 2, "unique": 2 })
    }); it('si ha ingresado --stat debe retornar total y unicos no como objeto', async() => {
    await expect(mdLinks(testArray, { validate: false, stat: true })).resolves.toEqual({ "total": 2, "unique": 2 })
}); it('si ha ingresado el arreglo testArray y --validate deberia retornar ruta del archivo, href, status text, status code, titulo del sitio', async() => {
    await expect(mdLinks(testArray, { validate: true, stat: false })).resolves.toEqual([{ "link": "https://josefin-ferrada.github.io/project-hackaton/src/index.html", "path": undefined, "status": 200, "statustext": "OK", "title": undefined }, { "link": "http://www.omdbapi.com/", "path": undefined, "status": 200, "statustext": "OK", "title": undefined }]);
}); it('si ha ingresado solo el arreglo deberia retornar ruta del archivo, href y titulo del sitio', async() => {
    await expect(mdLinks(testArray, { validate: false, stat: false })).resolves.toEqual([{ "link": "https://josefin-ferrada.github.io/project-hackaton/src/index.html", "path": undefined, "title": undefined }, { "link": "http://www.omdbapi.com/", "path": undefined, "title": undefined }]);
});

});*/