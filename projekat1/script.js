let inputprvi = document.getElementById ("prviInput");
let inputDrugi = document.getElementById ("drugiInput")
let inputTreci = document.getElementById ("treciInput");
let btnIzracunaj = document.getElementById("Izracunaj");
let izracunajCenu = document.getElementById("cena");
let izracunajCenu2 = document.getElementById("cena2");


btnIzracunaj.addEventListener ("click", ()=>{
    let value1=inputprvi.value;
    let value2=inputDrugi.value;
    let value3=inputTreci.value;
    ////
    let pokloni=0;
    let inputPokloni = document.querySelectorAll ('input[name="pokloni"]');
    inputPokloni.forEach(input=>{
        if(input.checked){
            pokloni+=500
        }
    })

    let inputPlacanje = document.getElementsByName('placanje');
    inputPlacanje.forEach(input => {
        let porudzbina= (value1*150)+(value2*120)+(value3*70)+pokloni
        if(input.checked){
            if(input.value == 'kartica' && porudzbina>2000){
                izracunajCenu2.innerHTML = porudzbina*0.9;
                izracunajCenu.innerHTML = porudzbina
            }       
            else if(input.value == 'kes'){
                izracunajCenu.innerHTML = porudzbina
            }}  
    })
    
})

// else{
//     alert('Molimo Vas izaberite način plaćanja')
//         }   