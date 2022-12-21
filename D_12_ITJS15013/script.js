//1. Dat je niz stavki za kupovinu (članovi niza su stringovi). Prolaskom kroz niz napraviti neuređenu listu i ispisati je u html dokument.

let spisak = ["jaja", "mleko", "secer", "brasno"]

let kupovina = niz =>{
    let lista = `<ul>`;
    for(let i = 0; i<niz.length;i++){
        lista = lista + `<li> ${niz[i]} </li>`;
    }
    lista = lista + "</ul>";
    return lista;
}
document.body.innerHTML += kupovina(spisak)

// Dat je niz imena košarkaškog tima. Prolaskom kroz niz formirati tabelu gde svaki od redova ima ćeliju u kojoj se nalazo naziv tima. 
// Tabelu ispisati u html dokument.

let timovi = ["KK Partizan", "KK Buducnost", "KK Fmp", "KK Mega"]

let tabela = niz =>{
    let tbl = `<table style="border:1px solid black">`;
    for(i=0;i<niz.length;i++){
        tbl=tbl+`<tr><td style="border:1px solid black" >${niz[i]}</td></tr>`
    }
    tbl=tbl + "</table>"
    return tbl;
}
document.body.innerHTML += tabela(timovi)

// Dat je niz stringova čiji su članovi putanje do slika. 
// Prikazati sve slike u html dokumentu, pri čemu su putanje da slika one putanje koje su navedene u nizu.

let slike = [`<img src="slike/slika1.jpg" width="350px"> <img src="slike/slika2.jpg" width="350px"> <img src="slike/slika3.jpg" width="350px">`]

let str = niz =>{
    let slicice= `<img>`
    for(i=0;i<niz.length;i++){
        slicice=slicice+niz[i];
    }
    return slicice;
}
document.body.innerHTML += str(slike)