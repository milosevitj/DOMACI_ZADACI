import Knjiga from "./knjige.js";

let knjiga1 = new Knjiga("1984", "Dzord Orvel", 1949, 150, 800);
let knjiga2 = new Knjiga("Norveska Suma", "Haruki Muuuuuuuurakami", 1987, 3000,4000);
let knjiga3 = new Knjiga("Dezorijentisani", "Amin Maluf", 2012, 800, 9000);

let knjige = [knjiga1, knjiga2, knjiga3];

// Štampam sve knjige i njihove podatke
let bodi = document.querySelector("body");
for (let i = 0; i < knjige.length; i++) {
  let paragraf = document.createElement("p");
  paragraf.innerHTML += knjige[i].stampaj();
  bodi.append(paragraf);
}
// Ispisati sve autore kojima je ime dugačko.
for (let i = 0; i < knjige.length; i++) {
  if (knjige[i].dugackoIme()) {
    let paragraf2 = document.createElement("p");
    paragraf2.innerHTML += `Autori čije ime je dugačko su: ${knjige[i].autor} `;
    bodi.append(paragraf2);
  }
}
// Ispisati sve one knjige koje su istovremeno i skupe i obimne.
for (let i = 0; i < knjige.length; i++) {
  if (knjige[i].obimna() && knjige[i].skupa()) {
    let paragraf3 = document.createElement("p");
    paragraf3.innerHTML += `Knjige koje su skupe i obimne su: ${knjige[i].naslov} `;
    bodi.append(paragraf3);
  }
}
// ukupnaCena - Određuje i vraća koliko ukupno koštaju sve knjge u nizu knjiga
let ukupnaCena = (knjige) => {
  let suma = 0;
  for (let i = 0; i < knjige.length; i++) {
    suma = suma + knjige[i].cena;
  }
  return suma;
};
console.log(ukupnaCena(knjige));

// prosecnaCena - Određuje i vraća kolika je prosečna cena knjige
let prosecnaCena = (knjige) => {
  let suma = 0;
  for (let i = 0; i < knjige.length; i++) {
    suma = suma + knjige[i].cena;
  }
  return suma / knjige.length;
};
console.log(prosecnaCena(knjige));

// prosecnaStranica - Određuje i vraća kolika je prosečna cena jedne stranice knjige
let prosecnaStranica = (knjige) => {
  let suma = 0;
  let sumaBrStranica = 0;
  for (let i = 0; i < knjige.length; i++) {
    suma += knjige[i].cena;
    sumaBrStranica += knjige[i].brojStrana;
  }
  return suma / sumaBrStranica;
};
console.log(prosecnaStranica(knjige));
