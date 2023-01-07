let questions = [
    {
        text: "Koja od navedenih država nema izlaz na Jadransko more?",
        answers: ["Albanija", "Italija", "Slovenija", "Makedonija"],
        correctAnswer: 3,
    },


    {
        text: "Kako se zove glavni grad Kipra?",
        answers: ["Larnaka", "Nikozija", "Nijedan od navedenih", "Limasol"],
        correctAnswer: 1,
    },

    {
        text: "Helsinki je glavni grad...",
        answers: ["Finske", "Danske", "Aljaske", "Ukrajine"],
        correctAnswer: 0
    },

    {
        text: "Poljska se ne graniči sa jednom od navedenih država. Kojom?",
        answers: ["Češka", "Belorusija", "Litvanija", "Austrija"],
        correctAnswer: 3
    },

    {
        text: "Kom okrugu pripada grad Vranje?",
        answers: ["Pčinjskom", "Rasinskom", "Bačkom", "Nišavskom"],
        correctAnswer: 0
    },

    {
        text: "U kom glavnom gradu se nalazi 'Zabranjeni grad'?",
        answers: ["Peking", "Džakarta", "Hong Kong", "PjongJang"],
        correctAnswer: 0
    },

    {
        text: "Ulan Bator je glavni grad..",
        answers: ["Kambodže", "Avagnistana", "Mongolije", "Jermenije"],
        correctAnswer: 2
    },

    {
        text: "Pored engleskog, u Pakistanu je sluzbeni jezik..",
        answers: ["urdu", "turski", "persijski", "francuski"],
        correctAnswer: 0
    },

    {
        text: "Koji je pun naziv Mauricijusa?",
        answers: ["Kraljevina Mauricijus", "Republika Mauricijus", "Francuska Republika Mauricijus", "Demokratska Država Mauricijus"],
        correctAnswer: 1
    },

    {
        text: "Koji je glavni grad Gruzije",
        answers: ["Batumi", "Kutaisi", "Tbilisi", "Gori"],
        correctAnswer: 2
    }
]



// let boja=["red", "orange", "green", "yellow", "blue", "gray", "purple", "black", "red"]

let bodi = document.querySelector("body")
let title = document.createElement("h1")
title.textContent = "ZANIMLJIVA GEOGRAFIJA"
bodi.appendChild(title)
let renderQuestions = function (shuffledQuestion) {
    for (let i = 0; i < 5; i++) {
        let div = document.createElement("div")
        let title = document.createElement("h4")
        title.textContent = `${i + 1}. ${shuffledQuestion[i].text}`
        div.appendChild(title)
        bodi.appendChild(div)
        for (let j = 0; j < shuffledQuestion[i].answers.length; j++) {
            let answer = document.createElement("p");

            if (j === 0) {
                answer.innerHTML = `<input type="radio" checked name=pitanje${i + 1}'> ${shuffledQuestion[i].answers[j]} </input>`
            }
            else {
                answer.innerHTML = `<input type="radio" name=pitanje${i + 1}'> ${shuffledQuestion[i].answers[j]} </input>`
            }
            div.appendChild(answer)
        }
    }
}

let but = document.createElement("button")
but.textContent = "Pošalji odgovore"
but.setAttribute("id", "odg")
let but2 = document.createElement("button")
but2.textContent = "Nova pitanja"
but2.setAttribute("id", "new")
bodi.append(but, but2)

let questionsShuffle = function (questions) {
    for (let i = questions.length - 1; i > 0; i--) {
        let newPos = Math.floor(Math.random() * (i + 1));
        let temp = questions[i];
        questions[i] = questions[newPos];
        questions[newPos] = temp;
    }
    return questions
}
let newOrder = questionsShuffle(questions)
but2.addEventListener("click", () => { location.reload(); });
renderQuestions(newOrder)



but.addEventListener("click", ()=>{
    let divAnswers = document.createElement("div");
    divAnswers.id="SendAnswers"
    let finalAnswers = document.querySelectorAll ("input:checked");
    for(let i=0;i<questions.length-5;i++){
        let paragraf = document.createElement ("p");
        if(questions[i].index==finalAnswers[i].id){
            paragraf.textContent = `tacno ste odgovorili na ${i+1} pitanja`;
            divAnswers.appendChild(paragraf)
        }
        else{
            paragraf.textContent = `niste tacno odgovorili na ${i+1} pitanja`;
            // finalAnwers.style.color="red";
            divAnswers.appendChild(paragraf)
        }
        bodi.appendChild(divAnswers)
    }
})



// but.addEventListener("click", () => {
//     for (let i = 0; i < 5; i++) {
//         let inputi=document.getElementsByName(`pitanje${i+1}`);
//         for(let j=0;j<4;j++){
//             if(inputi[j].checked){
//                 console.log(inputi[j])
//                 if(j==questions[i].index){
//                     let tacnoParagraf = document.createElement("p");
//                     tacnoParagraf.style.color = `green`;
//                     tacnoParagraf.textContent = `Tačno ste odgovorili na ${i + 1}. pitanje`;
//                     console.log(tacnoParagraf)
//                     rezultatiSection.appendChild(tacnoParagraf);
//                 }
//                 else {
//                     let netacnoParagraf = document.createElement("p");
//                     netacnoParagraf.style.color = `red`;
//                     netacnoParagraf.textContent = `Netačno ste odgovorili na ${i + 1}. pitanje`;
//                     let rezultatiSection = document.createElement("div")

//                     rezultatiSection.appendChild(netacnoParagraf);
//                 }
//             }
//         }
//     }
// })









