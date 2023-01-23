let getResponse = (resource) => {
  let request = new XMLHttpRequest();
  request.open("GET", resource);
  request.send();

  return new Promise((resolve, reject) => {
    request.addEventListener("readystatechange", () => {
      if (request.readyState == 4 && request.status == 200) {
        resolve(request.responseText);
      } else if (request.readyState == 4) {
        reject("Nije moguce dohvatiti podatke");
      }
    });
  });
};
getResponse("sportisti.json")
  .then((sadrzaj) => {
    console.log("sportisti.json resolved", sadrzaj);
    //Ispisati prosečnu visinu svih sportista.
    let sportisti = JSON.parse(sadrzaj);
    let sumaVisina = 0;
    sportisti.forEach((sportista) => {
      sumaVisina += sportista.visina;
    });
    console.log(
      "prosecna visina svih igraca je:",
      sumaVisina / sportisti.length
    );
    //Ispisati ime i prezime sportiste sa najmanje transfera (bilo kog ako ima više takvih sportista).
    let minTransferi = sportisti[0];
    sportisti.forEach((sportista) => {
      if (sportista.timovi.length < minTransferi.timovi.length) {
        minTransferi = sportista;
      }
    });
    console.log("Sportista sa najmanje timova: ", minTransferi.imePrezime);
    //Ispisati imena i prezimena svih sportista koji su igrali za „Lakers“-e.
    let LakersIgraci = false;
    for (let i = 0; i < sportisti.length; i++) {
      if (sportisti[i].timovi.includes("Lakers")) {
        LakersIgraci = true;
        console.log(sportisti[i].imePrezime);
      }
    }
    if (!LakersIgraci) {
      console.log("Nijedan nije igrao za Lakers-e");
    }
  })
  .catch((greska) => {
    console.log("promise reject", greska);
  });
