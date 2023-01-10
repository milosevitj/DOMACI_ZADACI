let pitanja = [
  {
    tekst: "Koja od navedenih država nema izlaz na Jadransko more?",
    odgovori: ["Albanija", "Italija", "Slovenija", "Makedonija"],
    indeks: 3,
  },

  {
    tekst: "Kako se zove glavni grad Kipra?",
    odgovori: ["Larnaka", "Nikozija", "Nijedan od navedenih", "Limasol"],
    indeks: 1,
  },

  {
    tekst: "Helsinki je glavni grad...",
    odgovori: ["Finske", "Danske", "Aljaske", "Ukrajine"],
    indeks: 0,
  },

  {
    tekst: "Poljska se ne graniči sa jednom od navedenih država. Kojom?",
    odgovori: ["Češka", "Belorusija", "Litvanija", "Austrija"],
    indeks: 3,
  },

  {
    tekst: "Kom okrugu pripada grad Vranje?",
    odgovori: ["Pčinjskom", "Rasinskom", "Bačkom", "Nišavskom"],
    indeks: 0,
  },

  {
    tekst: "U kom glavnom gradu se nalazi 'Zabranjeni grad'?",
    odgovori: ["Peking", "Džakarta", "Hong Kong", "PjongJang"],
    indeks: 0,
  },

  {
    tekst: "Ulan Bator je glavni grad..",
    odgovori: ["Kambodže", "Avagnistana", "Mongolije", "Jermenije"],
    indeks: 2,
  },

  {
    tekst: "Pored engleskog, u Pakistanu je sluzbeni jezik..",
    odgovori: ["urdu", "turski", "persijski", "francuski"],
    indeks: 0,
  },

  {
    tekst: "Koji je pun naziv Mauricijusa?",
    odgovori: [
      "Kraljevina Mauricijus",
      "Republika Mauricijus",
      "Francuska Republika Mauricijus",
      "Demokratska Država Mauricijus",
    ],
    indeks: 1,
  },

  {
    tekst: "Koji je glavni grad Gruzije",
    odgovori: ["Batumi", "Kutaisi", "Tbilisi", "Gori"],
    indeks: 2,
  },
];

let bodi = document.querySelector("body");
bodi.style.marginBottom = "200px";
let naslov = document.createElement("h1");
naslov.textContent = "ZANIMLJIVA GEOGRAFIJA";
bodi.appendChild(naslov);
let pitanjaOdgovoriElement = document.createElement("div");
pitanjaOdgovoriElement.setAttribute("id","div2")
bodi.appendChild(pitanjaOdgovoriElement);

function pitanjaOdgovori(nizPitanja) {
  pitanjaOdgovoriElement.innerHTML = "";
  //pitanja i odgovori
  for (let i = 0; i < nizPitanja.length - 5; i++) {
    let div = document.createElement("div");
    let naslov = document.createElement("h4");
    naslov.textContent = `${i + 1}. ${nizPitanja[i].tekst}`;
    div.appendChild(naslov);
    for (let j = 0; j < nizPitanja[i].odgovori.length; j++) {
      let radio = document.createElement("input");

      radio.setAttribute("type", "radio");
      radio.setAttribute("name", `pitanje${i + 1}`);
      radio.setAttribute("id", "radio")
      radio.id = j;

      if (j == 0) {
        radio.checked = true;
      }

      let odgovor = document.createElement("label");
      odgovor.setAttribute("for", j);
      odgovor.textContent = nizPitanja[i].odgovori[j];
      radio.appendChild(odgovor);
      odgovor.innerHTML += `<br>`;
      div.append(radio, odgovor);
      pitanjaOdgovoriElement.appendChild(div);
    }
  }
}
pitanjaOdgovori(pitanja);

let dugme = document.createElement("button");
dugme.textContent = "Pošalji odgovore";
dugme.setAttribute("id", "odg");
let dugme2 = document.createElement("button");
dugme2.textContent = "Nova pitanja";
dugme2.setAttribute("id", "new");
bodi.append(dugme, dugme2);

dugme.addEventListener("click", () => {
    let sviInputi = document.querySelectorAll("input");
    for(let k=0;k<sviInputi.length;k++){
      sviInputi[k].disabled=true
    }
  
  let prikaziOdgovore = document.createElement("div");
  prikaziOdgovore.id = "prikaziOdgovore";

  let konacniOdgovor = document.querySelectorAll("input:checked");

  for (let i = 0; i < pitanja.length - 5; i++) {
    let odgovorText = document.createElement("p");
    if (pitanja[i].indeks == konacniOdgovor[i].id) {
      odgovorText.textContent = `Tacno ste odgovorili na ${i + 1}. pitanje !!!`;
      odgovorText.style.color = "green";
      prikaziOdgovore.appendChild(odgovorText);
    } else {
      odgovorText.textContent = `Niste tacno ste odgovorili na ${i + 1}. pitanje!!!`;
      odgovorText.style.color = "red";
      prikaziOdgovore.appendChild(odgovorText);
    }
  }
  bodi.appendChild(prikaziOdgovore);
});

let questionsShuffle = function (pitanja) {
  for (let i = pitanja.length - 1; i > 0; i--) {
    for (let i = pitanja.length - 1; i > 0; i--) {
          let j = Math.floor(Math.random() * (i + 1));
          let temp = pitanja[i];
          pitanja[i] = pitanja[j];
          pitanja[j] = temp;
  }
  pitanjaOdgovori(pitanja)}
}
let noviNiz = questionsShuffle(pitanja)
dugme2.addEventListener("click", () => { location.reload(); });

