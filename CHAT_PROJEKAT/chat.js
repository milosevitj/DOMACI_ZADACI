export class Chatroom {
  constructor(r, u) {
    this.room = r;
    this.username = localStorage.getItem("username") || u;
    this.chats = db.collection("chats");
    this.unsub; // Bice undefined prilikom kreiranja objekta
  }
  set room(r) {
    this._room = r;
  }
  get room() {
    return this._room;
  }

  set username(u) {
    if (u.length >= 2 && u.length <= 10 && u.trim() !== "") {
      this._username = u;
      localStorage.setItem("username", u);
    } else {
      alert("Korisnicko ime nije validno");
    }
  }
  get username() {
    return this._username;
  }

  updateRoom(ur) {
    this.room = ur; // pozove seter i promeni sobu
    if (this.unsub) {
      this.unsub(); // ukoliko nije undefined izvrsi funkciju
    }
  }

  // dodavanje poruke
  async addChat(message) {
    let date = new Date();
    let docChat = {
      message: message,
      username: this.username,
      room: this.room,
      created_at: firebase.firestore.Timestamp.fromDate(date),
    };
    let response = await this.chats.add(docChat); // cuvanje dokumenata u db
    // await=sacekaj trenutak izvrsenja
    return response; // return je promise koji vracamo i od njega mozemo potrazivati .then i .catch
  }

  // Pracenje poruka u bazi i ispis dodatih poruka

  getChats(callback) {
    this.unsub = this.chats
      .where("room", "==", this.room)
      .orderBy("created_at", "asc")
      .onSnapshot((snapshot) => {
        // snapshot niz promena
        snapshot.docChanges().forEach((change) => {
          //krecemo se nizom promena
          if (change.type == "added") {
            // zanima nas one koje su added
            // console.log(change.doc.data()); //
            callback(change.doc.data());
          }
        });
      });
  }
}
