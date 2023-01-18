let input = document.getElementById("tekst");
let list = document.getElementById("list");


let arrTasks = JSON.parse(localStorage.getItem("arrTasks")) || [];
arrTasks=[]

for (let i = 0; i < arrTasks.length; i++) {
  let task = arrTasks[i];
  let taskItem = document.createElement("li");
  taskItem.innerHTML = task;
  list.appendChild(taskItem);
}
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
list.addEventListener("click", (e) => {
  if (e.target.tagName == "LI") {
      e.target.remove();
    }
  }
);
