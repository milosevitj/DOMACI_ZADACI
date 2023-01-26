console.log(db);

let movies = db.collection("movies");
console.log(movies);

let movie1 = movies.doc("movie1");
console.log(movie1);

// film2
db.collection("movies")
  .doc("movie2")
  .set({
    name: "How to train your dragon",
    director: { name: "Dean", surname: "DeBlois" },
    release_year: 2010,
    genres: ["Action", "Fantasy", "Drama", "Comedy", "Family film"],
    rating: 10,
  })
  .then(() => {
    console.log("Film2 je uspesno dodat");
    return db
      .collection("movies")
      .doc("movie2")
      .update({
        genres: firebase.firestore.FieldValue.arrayRemove("Comedy"), // obrisi zanr
      });
  })
  .then(() => {
    console.log("Uspeno izbrisan zanr filma2");
  })
  .catch((err) => {
    console.log("greska" + err);
  });

//film3
db.collection("movies")
  .doc("movie3")
  .set({
    name: "Lost in translation",
    director: { name: "Sofia", surname: "Coppola" },
    release_year: 2003,
    genres: ["Romance", "Drama", "Comedy"],
    rating: 9,
  })
  .then(() => {
    console.log("Film3 je uspesno dodat");
    return db
      .collection("movies")
      .doc("movie3")
      .update({
        genres: firebase.firestore.FieldValue.arrayUnion("Comedy of manners"), // dodaj zanr
      });
  })
  .then(() => {
    console.log("Uspeno je dodat zanr filma3");
  })
  .catch((err) => {
    console.log("greska" + err);
  });
//movie4
db.collection("movies")
  .doc("movie4")
  .set({
    name: "Moonrise",
    director: { name: "Wes", surname: "Ander" },
    release_year: 2012,
    genres: ["Romance", "Drama", "Comedy"],
    rating: 8,
  })
  .then(() => {
    console.log("Film4 je uspesno dodat");
    return db.collection("movies").doc("movie4").update({
      "director.surname": "Andreson", // promeni prezime
    });
  })
  .then(() => {
    console.log("Uspesno je promenjeno prezime rezisera");
  })
  .catch((err) => {
    console.log("greska" + err);
  });

//promeni rating i godinu prvom filmu
db.collection("movies")
  .doc("movie1")
  .set(
    {
      rating: 8,
      release_year: 2009,
    },
    {
      merge: true,
    }
  )
  .then(() => {
    console.log("Rating i godina filma1 su uspesno promenjeni");
  })
  .catch((err) => {
    console.log("Greska" + err);
  });

// promeni ime cetvrtom filmu
db.collection("movies")
  .doc("movie4")
  .set(
    {
      name: "Moonrise Kingdom",
    },
    {
      merge: true,
    }
  )
  .then(() => {
    console.log("Uspesno je promenjeno ime filma4");
  })
  .catch((err) => {
    console.log("greska" + err);
  });
