import { Chatroom } from "./chat.js";
import { ChatUI } from "./ui.js";

//DOM
let ul = document.querySelector("ul");
let inputPOr = document.querySelector("#inpSend");
let btnSend = document.querySelector("#send");
let inputUpdate = document.querySelector("#inpText");
let btnUpdate = document.querySelector("#btnUpd");
let divChangeUser = document.querySelector("#changeUser");
let nav = document.querySelector("nav");
let form = document.querySelector("#formColor");
let color = document.querySelector("#color");
let body = document.querySelector("body");
let img = document.querySelector("#trash");

let username = "anonymus";
if (localStorage.username) {
  username = localStorage.username;
}

let chatroom = new Chatroom("#general", username); // po defaultu je soba general
let chatUI = new ChatUI(ul); // objekat chat ui klase

//////////////////////////

chatroom.getChats((data) => {
  chatUI.templateLI(data);
});

btnSend.addEventListener("click", () => {
  if (inputPOr.value.trim() !== "") {
    chatroom
      .addChat(inputPOr.value)
      .then(() => (inputPOr.value = ""))
      .catch((err) => console.log(err));
  }
});

btnUpdate.addEventListener("click", (e) => {
  e.preventDefault();
  let newUser = inputUpdate.value;
  chatroom.username = newUser;
  inputUpdate.value = "";
  divChangeUser.textContent = `Username changed: ${chatroom.username}`;
  setTimeout(() => {
    divChangeUser.innerHTML = "";
  }, 1000 * 3);
});

nav.addEventListener("click", (e) => {
  if (e.target.tagName === "BUTTON") {
    if (document.querySelector(".active")) {
      document.querySelector(".active").classList.remove("active");
    }
    let newRoom = e.target.textContent;
    //2.Updajt sobe na koju je kliknuto
    chatroom.updateRoom(newRoom);
    //3. Izbrisati sve poruke sa ekrana
    chatUI.clearUL();
    // 4. prikazi cetove
    chatroom.getChats((data) => {
      chatUI.templateLI(data);
    });
  }
  e.target.classList.add("active");
});

if (localStorage.color) {
  body.style.backgroundColor = localStorage.color;
} else {
  body.style.backgroundColor = "white";
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  setTimeout(() => {
    body.style.backgroundColor = `${color.value}`;
  }, 500);
  clearTimeout();
  localStorage.setItem("color", color.value);
});

ul.addEventListener("click", (e) => {
  e.preventDefault();
  if (e.target.tagName === "LI") {
    console.log(e.target.parentElement);
    if (confirm("Do your really want to delete this message?")) {
      e.target.parentNode.removeChild(e.target);
    }
  }
});
