import fs from 'fs';

// Función que agrega superhéroes a la lista existente en superheroes.txt
export function agregarSuperheroes(nuevosSuperheroes) {
  fs.readFile('superheroes.Json', 'utf-8', (err, data) => {
    if (err) {
      console.error("Error al leer el archivo:", err);
      return;
    }

    // Parsear el contenido existente de superheroes.txt
    let listaSuperheroes = JSON.parse(data);

    // Agregar los nuevos superhéroes a la lista
    listaSuperheroes = [...listaSuperheroes, ...nuevosSuperheroes];

    // Guardar la lista actualizada en superheroes.txt
    fs.writeFile('superheroes.Json', JSON.stringify(listaSuperheroes, null, 2), (err) => {
      if (err) {
        console.error("Error al escribir el archivo:", err);
        return;
      }
      console.log("Superhéroe agregado con éxito.");
    });
  });
}
