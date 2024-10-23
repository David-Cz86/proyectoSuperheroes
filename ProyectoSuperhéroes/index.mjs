import fs from 'fs';
import { agregarSuperheroes } from './utils.mjs';

const archivoOriginal = './superheroes.json';
const archivoAgregar = './agregarSuperheroes.txt';

// Agregar nuevos superhéroes
agregarSuperheroes(archivoOriginal, archivoAgregar);

// Leer y mostrar la lista actualizada de superhéroes ordenada
const datosSuperheroes = fs.readFileSync(archivoOriginal, 'utf8');
const superheroes = JSON.parse(datosSuperheroes);
console.log('Superhéroes ordenados:');
console.log(superheroes);
