db.collection("movies")
  .where("director", "==", "George Lucas")
  .get()
  .then((snapshot) => {
    snapshot.forEach((doc) => {
      console.log("Uspesno skinut dokument:" + doc.id);
      console.log(doc.data());
    });
  })
  .catch((e) => {
    console.log("greska" + e);
  });
//Čija je ocena između 5 i 10,
db.collection("movies")
  .where("rating", ">=", 5)
  .where("rating", "<=", 10)
  .get()
  .then((snapshot) => {
    snapshot.forEach((doc) => {
      console.log("Rating izmedju 5 i 10:" + doc.id);
      console.log(doc.data());
    });
  })
  .catch((e) => {
    console.log("greska" + e);
  });
// Kojima je žanr komedija, tragedija ili drama,
db.collection("movies")
  .where("genres", "array-contains-any", ["Comedy", "Tragedy", "Drama"])
  .get()
  .then((snapshot) => {
    snapshot.forEach((doc) => {
      console.log("Kojima je žanr komedija, tragedija ili drama:" + doc.id);
      console.log(doc.data());
    });
  })
  .catch((e) => {
    console.log("greska" + e);
  });
//Koji su izašli u 21. veku.
db.collection("movies")
  .where("release_year", ">", 2001)
  .get()
  .then((snapshot) => {
    snapshot.forEach((doc) => {
      console.log("Koji su izašli u 21. veku.:" + doc.id);
      console.log(doc.data());
    });
  })
  .catch((e) => {
    console.log("greska" + e);
  });

db.collection("movies")
  .where("release_year", ">", 2001)
  .get()
  .then((snapshot) => {
    snapshot.forEach((doc) => {
      console.log("Koji su izašli u 21. veku.:" + doc.id);
      console.log(doc.data());
    });
  })
  .catch((e) => {
    console.log("greska" + e);
  });
