import fs from 'fs';
export function agregarSuperheroes(rutaOriginal, rutaAgregar) {
    const datosOriginales = fs.readFileSync(rutaOriginal, 'utf8');
    const datosAgregar = fs.readFileSync(rutaAgregar, 'utf8');
  
    const superheroesOriginales = JSON.parse(datosOriginales);
    const agregarSuperheroes = JSON.parse(datosAgregar);
  
    // Usar un Set para almacenar los IDs de los superhéroes existentes
    const idsExistentes = new Set(superheroesOriginales.map(hero => hero.id));
  
    // Filtrar los nuevos superhéroes para evitar duplicados
    const nuevosSuperheroesFiltrados = agregarSuperheroes.filter(hero => !idsExistentes.has(hero.id));
  
    // Combinar listas de superhéroes
    const listaActualizada = [...superheroesOriginales, ...nuevosSuperheroesFiltrados];
  
    // Guardar la lista actualizada
    fs.writeFileSync(rutaOriginal, JSON.stringify(listaActualizada, null, 2), 'utf8');
  
    console.log('Lista de superhéroes actualizada con éxito.');
  }
  