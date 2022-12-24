let dan = {
    temperature: [3,15,11],
    kisa: false,
    oblacno: true,
    suncano: false,

//1. Za dan se smatra da je tropski ukoliko nijedna temperatura izmerena tog dana nije iznosila ispod 24 stepena. Metod vraća true ukoliko je dan bio tropski, u suprotnom vraća false.// 

tropskiDan: function(){
    for(let i=0; i<this.temperature.length;i++){
        if(this.temperature[i]<24){
            return false
        }
    }
    return true
},
//2. Dan je nepovoljan ako je razlika između neka dva uzastopna merenja veća od 8 stepeni. Metod vraća true ukoliko je dan bio nepovoljan, u suprotnom vraća false.

nepovoljanDan:function(){
    for (let i = 0; i < this.temperature.length-1; i++){
    if (Math.abs(this.temperature[i] - this.temperature[i + 1])> 8) {
        return true;
    }
}
    return false
},

//3 Za dan se kaže da je neuobičajen ako je bilo kiše i ispod -5 stepeni, ili bilo oblačno i iznad 25 stepeni, ili je bilo i kišovito i oblačno i sunčano. Metod vraća true ukoliko je dan bio neuobičajen, u suprotnom vraća false.

neuobicajenDan:function(){
    for(let i=0; i<this.temperature.length;i++){
        if(this.temperature[i]<-5 && this.kisa==true){
            return true;
        }
        else if(this.temperature[i]>25 && this.oblacno==true){
            return true;
        }
        else if (this.kisa==true && this.oblacno==true && this.suncano==true)
            return true;
    }
    return false;
},
}

console.log(dan.tropskiDan());
console.log(dan.nepovoljanDan());
console.log(dan.neuobicajenDan());



