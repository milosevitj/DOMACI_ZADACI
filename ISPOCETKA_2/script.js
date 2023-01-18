let input = document.getElementById("tekst");
let list = document.querySelector("ul");

let arrTasks = [];
arrTasks = JSON.parse(localStorage.getItem("arrTasks")) || [];

for (let i = 0; i < arrTasks.length; i++) {
  let task = arrTasks[i];
  let taskItem = document.createElement("li");
  taskItem.innerHTML = task;
  list.appendChild(taskItem);
}

// localStorage.setItem("arrTasks", JSON.stringify(arrTasks));
input.addEventListener("keyup", (e) => {
  if (e.key == "Enter") {
    let newLiValue = input.value;
    let radio = document.getElementsByName("radio");
    let noviLi = document.createElement("li");
    noviLi.textContent = newLiValue;
    if (newLiValue != 0) {
      radio.forEach((input) => {
        if (input.checked) {
          if (input.value == "pocetak") {
            list.prepend(noviLi);
            arrTasks.unshift(newLiValue);
          } else {
            list.appendChild(noviLi);
            arrTasks.push(newLiValue);
          }
        }
      });
      localStorage.setItem("arrTasks", JSON.stringify(arrTasks));
      input.value = "";
    }
  }
});
//obrisani svi taskovi

// localStorage.removeItem("arrTasks");
// for (let i = 0; i < taskElements.length; i++) {
//   taskElements[i].remove();
// }

// brisanje jednog  taska iz memorije
list.addEventListener("click", (e) => {
  if (e.target.tagName == "LI") {
    let taskToRemove = e.target.textContent;
    let index = arrTasks.indexOf(taskToRemove);
    if (index > -1) {
      arrTasks.splice(index, 1);
      localStorage.setItem("arrTasks", JSON.stringify(arrTasks));
      e.target.remove();
    }
  }
});
