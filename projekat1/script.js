let inputprvi = document.getElementById ("prviInput");
let inputDrugi = document.getElementById ("drugiInput")
let inputTreci = document.getElementById ("treciInput");
let btnIzracunaj = document.getElementById("Izracunaj");
let izracunajCenu = document.getElementById("cena");
let izracunajCenu2 = document.getElementById("cena2");
let plusBomb=document.getElementById("plusBomb")
let plusCoko=document.getElementById("plusCoko")
let plusSamp=document.getElementById("plusSamp")


btnIzracunaj.addEventListener ("click", ()=>{
    let value1=inputprvi.value;
    let value2=inputDrugi.value;
    let value3=inputTreci.value;
    ////
    let inputPokloni = document.querySelectorAll ('input[name="pokloni"]');
    let pokloni=0;

    inputPokloni.forEach(input=>{
        if(input.checked ){
            pokloni+=500
            if(input.value == "bombonjera"){
                plusBomb.innerHTML = "+bombonjera"
            }
            else if(input.value == "sampanjac"){
                plusSamp.innerHTML = "+sampanjac"
            }
            else if(input.value == "cokolada"){
                plusCoko.innerHTML = "+cokolada"
            }
        }
      
    })
    ///
    let inputPlacanje = document.getElementsByName('placanje');
    inputPlacanje.forEach(input => {
        let porudzbina= (value1*150)+(value2*120)+(value3*70)+pokloni
        if(input.checked){
            if(input.value == 'kartica' && porudzbina>2000){
                izracunajCenu2.innerHTML = porudzbina*0.9;
                izracunajCenu.innerHTML = porudzbina
            }       
            else{
                izracunajCenu.innerHTML = porudzbina
            }}  
    })
    
})

// else{
//     alert('Molimo Vas izaberite način plaćanja')
//         }   