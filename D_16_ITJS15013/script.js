let input = document.getElementById("tekst");
let list = document.querySelector("ul");

let taskElements = document.querySelectorAll(".task");
let arrTasks = [];
for (let i = 0; i < taskElements.length; i++) {
  arrTasks.push(taskElements[i].textContent);
}
arrTasks = JSON.parse(localStorage.getItem("arrTasks")) || [];
localStorage.setItem("arrTasks", JSON.stringify(arrTasks));


input.addEventListener("keyup", (e) => {
  if (e.key === "Enter") {
    let newLiValue = input.value;
    let radio = document.getElementsByName("radio");
    let noviLi = document.createElement("li");
    noviLi.textContent = newLiValue;
    if (newLiValue !== "") {
      radio.forEach((input) => {
        if (input.checked) {
          if (input.value === "pocetak") {
            list.prepend(noviLi);
          } else {
            list.appendChild(noviLi);
          }
        }
      });
      arrTasks.push(newLiValue);
      localStorage.setItem("arrTasks", JSON.stringify(arrTasks));
      input.value = "";
    }
  }
});


list.addEventListener("click", (e) => {
  if (e.target.tagName == "LI") {
    e.target.remove();
  }
});















