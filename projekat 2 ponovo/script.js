let pitanje1 = {
    tekst: "Koja od navedenih država nema izlaz na Jadransko more?",
    odgovori: ["Albanija","Italija","Slovenija","Makedonija"],
    indeks: 3
}


let pitanje2 = {
    tekst: "Kako se zove glavni grad Kipra?",
    odgovori: ["Larnaka", "Nikozija", "Nijedan od navedenih", "Limasol"],
    indeks: 1
}

let pitanje3 = {
    tekst: "Helsinki je glavni grad...",
    odgovori:["Finske", "Danske", "Aljaske", "Ukrajine"],
    indeks:0
}

let pitanje4 = {
    tekst: "Poljska se ne graniči sa jednom od navedenih država. Kojom?",
    odgovori: ["Češka", "Belorusija", "Litvanija", "Austrija"],
    indeks:3
}

let pitanje5 = {
    tekst: "Kom okrugu pripada grad Vranje?",
    odgovori: ["Pčinjskom", "Rasinskom", "Bačkom", "Nišavskom"],
    indeks:0
}

let pitanje6 = {
    tekst: "U kom glavnom gradu se nalazi 'Zabranjeni grad'?",
    odgovori: ["Peking", "Džakarta", "Hong Kong", "PjongJang" ],
    indeks:0
}

let pitanje7 ={
    tekst: "Ulan Bator je glavni grad..",
    odgovori: ["Kambodže", "Avagnistana", "Mongolije", "Jermenije"],
    indeks: 2
}

let pitanje8 = {
    tekst: "Pored engleskog, u Pakistanu je sluzbeni jezik..",
    odgovori:["urdu", "turski", "persijski", "francuski"],
    indeks:0
}

let pitanje9 = {
    tekst: "Koji je pun naziv Mauricijusa?",
    odgovori: ["Kraljevina Mauricijus", "Republika Mauricijus", "Francuska Republika Mauricijus", "Demokratska Država Mauricijus"],
    indeks:1
}

let pitanje10 = {
    tekst: "Koji je glavni grad Gruzije",
    odgovori:["Batumi", "Kutaisi", "Tbilisi", "Gori"],
    indeks:2
}

let pitanja=[pitanje1,pitanje2,pitanje3,pitanje4,pitanje5,pitanje6,pitanje7,pitanje8,pitanje9,pitanje10]

let funkcija = pitanja =>{
    for(i=pitanja.length-1; i<9; i++){

    }
}

let prvoPitanje = document.getElementById ("pitanje1")
let drugoPitanje = document.getElementById ("pitanje2")
let trecePitanje = document.getElementById ("pitanje3")
let cetvrtoPitanje = document.getElementById ("pitanje4")
let petoPitanje = document.getElementById ("pitanje5")
let sestoPitanje = document.getElementById ("pitanje6")
let sedmoPitanje = document.getElementById ("pitanje7")
let osmoPitanje = document.getElementById ("pitanje8")
let devetoPitanje = document.getElementById ("pitanje9")
let desetoPitanje = document.getElementById ("pitanje10")

let pitanjaShuffle = function(pitanja){
    let newpos;
    let temp;
    for(let i=pitanja.length-1;i>0;i--){
        newpos=Math.floor(Math.random()*(i+1));
        temp=pitanja[i];
        pitanja[i]=pitanja[newpos];
        pitanja[newpos]=temp;
    }
    return pitanja
}
let noviNiz = pitanjaShuffle(pitanja)
console.log(noviNiz)
innerHTML = noviNiz


