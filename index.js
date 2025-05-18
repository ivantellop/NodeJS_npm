const planetas = require('./data/planetas');
const mostrarPlanetas = require('./utils/mostrarPlanetas');

const nuevoNombre = process.argv[2];
const nuevaDescripcion = process.argv[3];

if (nuevoNombre && nuevaDescripcion) {
    planetas.push({ nombre: nuevoNombre, descripcion: nuevaDescripcion });
    console.log("🪐 ¡Nuevo planeta agregado con éxito!\n");
}

console.log("🌌 Planetas favoritos del explorador:");
mostrarPlanetas(planetas);
