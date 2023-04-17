let hechizosAprendidosTom= 13;
let hechizosAprendidosJerry= 12;
let hechizosTotalesAprobar= 15;
let hechizosMinAprobar= (hechizosTotalesAprobar*80)/100;
let hechizosFaltantesTom= (hechizosTotalesAprobar - hechizosAprendidosTom);
let hechizosFaltantesJerry= (hechizosTotalesAprobar - hechizosAprendidosJerry);

console.log("Cantidad de hechizos minimos para aprobar es: " + hechizosMinAprobar);
console.log("Tom aprobo con " + hechizosAprendidosTom);
console.log("Jerry aprobo con " + hechizosAprendidosJerry);
console.log("Le faltaron a Tom: " + hechizosFaltantesTom + " para aprobar");
console.log("Le faltaron a Jerry: " + hechizosFaltantesJerry + " para aprobar");