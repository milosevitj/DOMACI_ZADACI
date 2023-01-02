let inputprvi = document.getElementById ("prviInput");
let inputDrugi = document.getElementById ("drugiInput")
let inputTreci = document.getElementById ("treciInput");
let btnIzracunaj = document.getElementById("Izracunaj");
let izracunajCenu = document.getElementById("cena");


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
    ////
    izracunajCenu.innerHTML = (value1*150)+(value2*120)+(value3*70)+pokloni

    ////
    let inputSedmi = document.getElementById ("input7");
    let inputOsmi = document.getElementById ("input8");
    let Izracunajcenu2 = document.getElementById ("cena2")
    let inputPlacanje = document.querySelectorAll ('input[name="placanje"]');
    
        let cena=0;
        if(inputOsmi.checked && cena>2000){
            Izracunajcenu2.innerHTML=  ((value1*150)+(value2*120)+(value3*70)+pokloni) *0.9
        }

        else{
            izracunajCenu.innerHTML = (value1*150)+(value2*120)+(value3*70)+pokloni
        }  
    })

        // if(inputOsmi && izracunajCenu>2000){
        //     Izracunajcenu2.innerHTML = izracunajCenu*0.9
        // }

