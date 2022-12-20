//  1.Napisati funkciju koja vraća aritmetičku sredinu brojeva koji nisu deljivi sa 3 u intervalu od n do m. Brojeve n i m proslediti kao parametre funkciji.

// Imenovana

function aritmetickaSredina (n,m){
    let sredina=0;
    let brBrojeva=0;
    for(i=n; i<=m;i++){
        if(i%3!=0){
            console.log(i)
        sredina=sredina+i;
        brBrojeva++;
    }
    }
    return sredina/brBrojeva
}
console.log(aritmetickaSredina(1,20));

//ARROW

let aritmeticka = (n,m) => {
    let sredina=0;
    let brBrojeva=0;
    for(i=n; i<=m;i++){
        if(i%3!=0){
        sredina=sredina+i;
        brBrojeva++;
    }
    }
    return sredina/brBrojeva
    
}
console.log(aritmeticka(1,50));

// 2. Zadatak Napisati funkciju kojoj se prosleđuje ceo broj i string, a ona ispisuje taj string u paragrafu koji ima prosleđenu veličinu fonta.

//imenovana

function brojString (font,string){
    document.write (`<p style="font-size:${font}px"> ${string} </p>`)
}
brojString(50,"Imenovana Funkcija")

//arrow

brojString = (font,string) => `<p style="font-size:${font}px"> ${string} </p>`;

document.write(brojString (40, "Arrow funkcija"))

