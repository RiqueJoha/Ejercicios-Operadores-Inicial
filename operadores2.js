let nuggetsTotales= 43;
let cantidadComenzales= 3;
let nuggetsSobrantes= nuggetsTotales % cantidadComenzales;
let cantidadNuggetsComensales = (nuggetsTotales - nuggetsSobrantes) / cantidadComenzales;
let nuggetsScar= cantidadNuggetsComensales + nuggetsSobrantes;
let nuggetsMufasa= cantidadNuggetsComensales;
let nuggetsSimba= cantidadNuggetsComensales;


console.log("Scar tiene " + nuggetsScar + " nuggets");
console.log("Mufasa tiene " + nuggetsMufasa + " nuggets");
console.log("Simba tiene " + nuggetsSimba + " nuggets");

/* nuggetsScar= cantidadNuggetsComensales;
nuggetsSimba= cantidadNuggetsComensales + nuggetsSobrantes; */

nuggetsScar -= nuggetsSobrantes;
nuggetsSimba += nuggetsSobrantes;

console.log("Scar tiene " + nuggetsScar + " nuggets");
console.log("Mufasa tiene " + nuggetsMufasa + " nuggets");
console.log("Simba tiene " + nuggetsSimba + " nuggets");