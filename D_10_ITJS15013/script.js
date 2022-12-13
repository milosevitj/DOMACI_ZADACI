let board = `<div style="text-align:center;">`
let red=0;

for(i=1; i<=64;i++){
    let backgroundColor;
    let color;

    if(i%2 ==0 && red%2 ==0){
        backgroundColor = 'black';
        color='white'}
    
    if(i%2 ==1 && red%2 ==1){
        backgroundColor = 'black';
        color='white'}
    
    if (i%8==0){
    red++    
        board+= `<span style= "background-color:${backgroundColor};color:${color};width:40px; height:40px;font-size:20px; border: 1px solid black; padding:20px; display:inline-block;margin-bottom:10px"> ${i}</span><br>`
     
    }
    else {
        board+= `<span style= "background-color:${backgroundColor};color:${color};width:40px; height:40px;font-size:20px; border: 1px solid black; padding:20px;display:inline-block;"> ${i} </span>`
    }
}
board +=`</div>`
document.write (board);