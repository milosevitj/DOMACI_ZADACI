// 1 ZADATAK

let v = 60; 
let n = 35; 
let dozvoljenBrojGostiju = Math.floor (v / 3);


if (n <= dozvoljenBrojGostiju){
    document.write ("<p style=color:green;> DA </p> ");
}
else (document.write(` <p style= color:red;> NE, lokal je potrebno da napusti ${n-dozvoljenBrojGostiju} gostiju </p>`));

// 2 ZADATAK

n = 1;
let m = 20;
i = n;
let zbir = 0;

while(i<=m){
    if(i %3 == 0 && i %7 != 0){
        zbir = zbir + i;
    }
    i++
}
console.log(`Zbir svih brojeva koji su deljivi sa 3, a nisu sa 7 je: ${zbir}`);

// 3 ZADATAK

n = 45;
i = 1;              
let delioci = 0; 
while(i <=n){
    if(n % i == 0 && i %3 ==0 && i%2 ==1){
        delioci++;
    }
    i++;
}
console.log (`Broj ${n} ima ${delioci} delioca koji su deljivi sa 3 i neparni su`);





