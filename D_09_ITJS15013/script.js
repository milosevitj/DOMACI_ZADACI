// 1. Zadatak
// Dodati na stranicu n puta jednu siku. Slikama koje su na parnim pozicijama postavljati crveni okvir, slikama koje su na neparnim pozicijama postavljati plavi okvir.

for (i=1 ; i<=10; i++){
    if (i%2==0){
    document.write (`<img src="1.jpg" style = "border: 5px solid red">`);
   }
   else{
    document.write(`<img src="1.jpg" style = "border: 5px solid blue">`);
   }
}

// 2. Zadatak
// For petljom odrediti da li je dati prirodan broj n prost.
//  Broj je prost ako je deljiv samo sa jedinicom i sa samim sobom.

n=7;
let delioc=0;

for (i=1; i<=n; i++){ 
    if( n%i== 0 ){
       delioc++;
    }
}

if (delioc == 2)
{
    console.log (`broj ${n} je prost`)
}
else{
    console.log (`broj ${n} je slozen`)
}

