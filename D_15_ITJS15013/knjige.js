class Knjiga {
  constructor(n, a, g, b, c) {
    this.naslov = n;
    this.autor = a;
    this.godinaIzdanja = g;
    this.brojStrana = b;
    this.cena = c;
  }
  stampaj() {
    let htmlLista = `<ul >
            <li style="list-style-type: none"><b>Naslov: ${this.naslov}</b></li>
            <li>Autor: ${this.autor}</li>
            <li>Godina izdanja: ${this.godinaIzdanja}</li>
            <li>Broj strana:${this.brojStrana}</li>
            <li>Cena: ${this.cena}</li>
        </ul>`;
    return htmlLista;
  }
  //Metodu obimna koja vraća true ukoliko je knjiga obimna (broj strana veći od 600), u suprotnom vraća false.
  obimna() {
    if (this.brojStrana > 600) {
      return true;
    } else {
      return false;
    }
  }
  // Metodu skupa koja vraća true ukoliko je knjiga skupa (knjiga je skupa, ukoliko je njena cena veća od 8000),  u suprotnom vraća false.
  skupa() {
    if (this.cena > 8000) {
      return true;
    } else {
      return false;
    }
  }
  // Metodu dugackoIme koja ispituje da li je ime autora dugačko (ukoliko je broj karaktera u autorovom imenu veći od 18 ime se smatra dugačkim). Ukoliko je ime dugačko vraća true, u suprotnom vraća false.

  dugackoIme() {
    if (this.autor.length > 18) {
      return true;
    } else {
      return false;
    }
  }
  //naslov
  get naslov() {
    return this._naslov;
  }
  set naslov(n) {
    if (n.length > 0) {
      this._naslov = n;
    } else {
      this._naslov = "Knjiga ne postoji";
    }
  }
  //autor
  get autor() {
    return this._autor;
  }
  set autor(a) {
    if (a.length > 0) {
      this._autor = a;
    } else {
      this._autor = "Autor ne postoji";
    }
  }
  //godinaIzd
  get godinaIzdanja() {
    return this._godinaIzdanja;
  }
  set godinaIzdanja(g) {
    if(g > 0){
      this._godinaIzdanja = g;
    }
    else{
      this._godinaIzdanja = 0;
    }
  }
  // brojStrana
  get brojStrana() {
    return this._brojStrana;
  }
  set brojStrana(b) {
    if(b > 0){
      this._brojStrana = b;
    }else{
      this._brojStrana = 0;
    }
  }
  //cena
  get cena() {
    return this._cena;
  }
  set cena(c) {
    if (c > 0) {
      this._cena = c;
    } else {
      this._cena = 0;
    }
  }
}
export default Knjiga;
