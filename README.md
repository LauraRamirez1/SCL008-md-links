# mdlinks
mdlink es una herramienta que identifica los archivos .md en un directorio o carpeta y permite revisar los links dentro de dicho archivo. Usted puede conocer a través de mdlinks detalles de cada link como el estatus y la cantidad de links por archivo.


## Instalación 🔧

### Uso
Abra la terminal de su computador. Ingrese al repositorio donde desea correr la librería.
Instale la librería usando ``npm install LauraRamirez1/SCL008-md-links``


#### Opciones

1. Si desea conocer el listado de links dentro de una carpeta o directorio
```sh
md-links.js <carpeta o directorio>  
```
2. Para validar los links del archivo ingrese (muestra el estatus de los links)
```sh
md-links.js <carpeta o directorio> --validate
```
3. Para conocer la cantidad de links y cuántos de ellos son únicos ingrese
```sh
md-links.js <carpeta o directorio> --stats 
```
4. Para validar los links y conocer cuantos de ellos estan rotos  
```sh
md-links.js
 <carpeta o directorio> --validate --stats 
```

## Documentación tecnica 🛠️
  
* [jest](https://jestjs.io/)
* [link](https://docs.npmjs.com/cli/link.html)
* [node-fetch](https://www.npmjs.com/package/node-fetch)

## Versionado 📌
Version: 0.1.0
## Autor ✒️
Laura Natalia Ramirez Rojas - Master
