# mdlinks
mdlink es una herramienta que identifica los archivos .md en un directorio o carpeta y permite revisar los links dentro de dicho archivo. Usted puede conocer a través de mdlinks detalles de cada link como el estatus y la cantidad de links por archivo.


## Instalación 🔧

### Uso
Abra la terminal de su computador. Ingrese al repositorio donde desea correr la librería.
Instale la librería usando ``xxxx```


#### Opciones

1. Si desea conocer el listado de links dentro de una carpeta o directorio
```sh
mdlinks <carpeta o directorio>  
```
2. Para validar los links del archivo ingrese (muestra el estatus de los links)
```sh
mdlinks <carpeta o directorio> --validate
```
3. Para conocer la cantidad de links y cuántos de ellos son únicos ingrese
```sh
mdlinks <carpeta o directorio> --stats 
```
4. Para validar los links y conocer cuantos de ellos estan rotos  
```sh
mdlinks <carpeta o directorio> --validate --stats 
```

## Documentación tecnica 🛠️
  
* [jest](https://jestjs.io/)
* [link](https://docs.npmjs.com/cli/link.html)
* [node-fetch](https://www.npmjs.com/package/node-fetch)

## Versionado 📌
Version: 0.1.0
## Autor ✒️
María Elena Hernández Payán - Master
