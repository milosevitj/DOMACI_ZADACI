let pitanja = [
    {
        tekst: "Koja od navedenih država nema izlaz na Jadransko more?",
        odgovori: ["Albanija","Italija","Slovenija","Makedonija"],
        indeks: 3,
    },
    
    
    {
        tekst: "Kako se zove glavni grad Kipra?",
        odgovori: ["Larnaka", "Nikozija", "Nijedan od navedenih", "Limasol"],
        indeks: 1,
    },
    
    {
        tekst: "Helsinki je glavni grad...",
        odgovori:["Finske", "Danske", "Aljaske", "Ukrajine"],
        indeks:0
    },
    
    {
        tekst: "Poljska se ne graniči sa jednom od navedenih država. Kojom?",
        odgovori: ["Češka", "Belorusija", "Litvanija", "Austrija"],
        indeks:3
    },
    
    {
        tekst: "Kom okrugu pripada grad Vranje?",
        odgovori: ["Pčinjskom", "Rasinskom", "Bačkom", "Nišavskom"],
        indeks:0
    },
    
    {
        tekst: "U kom glavnom gradu se nalazi 'Zabranjeni grad'?",
        odgovori: ["Peking", "Džakarta", "Hong Kong", "PjongJang" ],
        indeks:0
    },
    
    {
        tekst: "Ulan Bator je glavni grad..",
        odgovori: ["Kambodže", "Avagnistana", "Mongolije", "Jermenije"],
        indeks: 2
    },
    
    {
        tekst: "Pored engleskog, u Pakistanu je sluzbeni jezik..",
        odgovori:["urdu", "turski", "persijski", "francuski"],
        indeks:0
    },
    
    {
        tekst: "Koji je pun naziv Mauricijusa?",
        odgovori: ["Kraljevina Mauricijus", "Republika Mauricijus", "Francuska Republika Mauricijus", "Demokratska Država Mauricijus"],
        indeks:1
    },
    
    {
        tekst: "Koji je glavni grad Gruzije",
        odgovori:["Batumi", "Kutaisi", "Tbilisi", "Gori"],
        indeks:2
    }
]


// let boja=["red", "orange", "green", "yellow", "blue", "gray", "purple", "black", "red"]

let bodi = document.querySelector("body")
let naslov = document.createElement ("h1")
naslov.textContent = "ZANIMLJIVA GEOGRAFIJA"
bodi.appendChild(naslov)
for(let i=0;i<pitanja.length;i++){
    let div = document.createElement ("div")
    let naslov = document.createElement ("h4")
    naslov.textContent = `${i+1}. ${pitanja[i].tekst}`
    div.appendChild(naslov)
    bodi.appendChild(div)
    for(let j=0;j<pitanja[i].odgovori.length;j++){
       let odgovor = document.createElement ("p");
       if(j==0){
        odgovor.innerHTML=`<input type="radio" checked name=pitanje${i+1}> ${pitanja[i].odgovori[j]} </input>`
       }
       else{
        odgovor.innerHTML=`<input type="radio" name=pitanje${i+1}> ${pitanja[i].odgovori[j]} </input>`
       }
       div.appendChild(odgovor)
    }
}
let dugme = document.createElement("button")
dugme.textContent = "Pošalji odgovore"
dugme.setAttribute("id","odg")
let dugme2 = document.createElement ("button")
dugme2.textContent = "Nova pitanja"
dugme2.setAttribute("id","new")
bodi.append(dugme,dugme2)


dugme.addEventListener("click", ()=>{
    let answer = document.createElement ("p");
    for(let i=0;i<pitanja.length;i++){
        if(pitanja[i].indeks){
            answer.innerHTML = "tacno"
        }
    }
})


