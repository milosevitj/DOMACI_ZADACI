knjiga1 = {
    naziv: "Norveska suma",
    autor: "Haruki Murakami",
    putanja: "https://www.hocuknjigu.hr/getmedia/21019599-caab-474b-9d61-88c7f072e36f/9789958413162.jpg.aspx?maxsidesize=380",
    polje: true,
}

knjiga2 = {
    naziv: "Nepodnosljiva lakoca postojanja",
    autor: "MIlan Kundera",
    putanja: "https://www.delfi.rs/_img/artikli/2017/03/nepodnosljiva_lakoca_podstojanja_vv.jpg",
    polje: true,
}

knjiga3 = {
    naziv: "Lovac u zitu",
    autor: "Dz.D.Delindzer",
    putanja: "https://www.knjizararoman.rs/__public/upload/2020/09/08/knjiga-lovac-u-zitu-tvrd-povez-dz-d-selindzer-lom-knjizara-roman-foto1-73065.jpg",
    polje: false,
}

let knjige=[knjiga1,knjiga2,knjiga3]


//Formirati tabelu koja ima dve kolone i onoliko redova koliko ima niz knjiga.
// U prvoj koloni je potrebno staviti sličicu knjige, a u drugoj koloni u paragrafu naziv knjige i autora.
// Ukoliko je knjiga pročitana, boja teksta u tom redu treba da bude plava, a ako nije, boja teksta treba da bude siva.
// Vrste tabele treba da budu naizmenično obojene u dve pozadinske boje.


let bodi = document.querySelector("body");
let tabela = document.createElement("table");
tabela.style.border = "1px solid black"
bodi.appendChild(tabela);


for(let i=0;i<knjige.length;i++){
    let red = document.createElement("tr");
    if(knjige[i].polje){
        red.style.color="blue"
    }
    else{
        red.style.color="gray"
    }
    if(i%2==0){
        red.style.backgroundColor="yellow"
    }
    else{
        red.style.backgroundColor="lightgreen"
    }
    let celija1 = document.createElement("td");
    let celija2 = document.createElement("td");
    let slika = document.createElement("img");
    slika.style.width="100%"
    slika.src = knjige[i].putanja
    celija1.appendChild(slika)
    let paragraf = document.createElement("p");
    paragraf.textContent = `${knjige[i].naziv} ${knjige[i].autor}`
    celija2.appendChild(paragraf);
    red.append(celija1,celija2)
    tabela.appendChild(red)
}


