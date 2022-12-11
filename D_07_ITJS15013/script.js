//ZADATAK 1

let p = 1000; 
let m = 800; 
let k = 300; 
let cenaDzempera = (p + m - k) / 2;

console.log(p - cenaDzempera);
console.log(m - cenaDzempera);

// ZADATAK 2

let n = 20; 
let a1 = 5; 
let a2 = a1 + 2; 
let preostalo = n - a1 - a2;

console.log(preostalo);
if (preostalo < n/2){
    console.log ("Ostalo je da procita jos manje od polovine knjige");
}

// ZADATAK 3

let u = 10000; // dnevni unos u kJ
let kJ = 4.1868;
let vrednost = u/kJ;

console.log(vrednost);
if(vrednost<2000){
    console.log("potrebno je uvecati dnevni unos");
}
else{
    console.log("Nije potrebno uvecati dnevni unos");
}
