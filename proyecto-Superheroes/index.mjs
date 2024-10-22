import fs from 'fs';
import { agregarSuperheroes } from './utils.mjs';

// Lee los datos del archivo AgregarSuperheroes.txt
fs.readFile('AgregarSuperheroes.txt', 'utf-8', (err, data) => {
  if (err) {
    console.error("Error al leer el archivo:", err);
    return;
  }
  const nuevosSuperheroes = JSON.parse(data);
  agregarSuperheroes(nuevosSuperheroes);
});
