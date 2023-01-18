let input = document.getElementById("tekst");
let list = document.querySelector("ul");

let taskElements = document.querySelectorAll(".task");
let arrTasks = [];
arrTasks = JSON.parse(localStorage.getItem("arrTasks")) || [];

for (let i = 0; i < arrTasks.length; i++) {
  let task = arrTasks[i];
  let taskItem = document.createElement("li");
  taskItem.innerHTML = task;
  list.appendChild(taskItem);
}
localStorage.setItem("arrTasks", JSON.stringify(arrTasks));

input.addEventListener("keyup", (e) => {
  if (e.key == "Enter") {
    let newLiValue = input.value;
    let radio = document.getElementsByName("radio");
    let noviLi = document.createElement("li");
    noviLi.textContent += newLiValue;
    if (newLiValue != 0) {
      radio.forEach((input) => {
        if (input.checked) {
          if (input.value == "pocetak") {
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
