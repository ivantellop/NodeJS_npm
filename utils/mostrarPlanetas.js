function mostrarPlanetas(planetas) {
    planetas.forEach((planeta, index) => {
        console.log(`${index + 1}. ${planeta.nombre}: ${planeta.descripcion}`);
    });
}

module.exports = mostrarPlanetas;
