const addBox = document.getElementById("addBox");
const newTask = document.getElementById("newTask");
const total = document.getElementById("total");
const suma = document.getElementById("suma");
const completed = document.getElementById("completed");
const checking = document.getElementById("cheking");
let checkBox = document.getElementById("myCheck1");

let arrayTasks = [
  { id: Date.now(), name: "Sacar la basura", done: false },
  { id: Date.now(), name: "Ordenar la ropa", done: false },
  { id: Date.now(), name: "Estudiar", done: false },
];

const addTask = () => {
  total.innerHTML = "";

  let contar = 0;

  arrayTasks.forEach((item) => {
    total.innerHTML += `<div>
          ${item.id}  
          ${item.name} 

           <button onclick="eliminar(${item.id})">eliminar</button> 
           <b><label for="myCheck">Realizada:</label></b>
            <input ${item.done ? "checked" : ""} onchange="completar(${
      item.id
    })" type="checkbox">`;

    contar = contar + 1;
  });

  suma.innerHTML = contar;
  completed.innerHTML = arrayTasks.filter((item) => item.done).length;
};

addTask();

const eliminar = (id) => {
  arrayTasks = arrayTasks.filter((item) => item.id !== id);

  addTask();
};

const completar = (id) => {
  arrayTasks.forEach((item) => {
    if (item.id === id && !item.done) {
      item.done = true;
    } else if (item.id === id && item.done) {
      item.done = false;
    }
  });

  addTask();
};

addBox.addEventListener("submit", (evt) => {
  evt.preventDefault();
  arrayTasks.push({
    id: Date.now(),
    name: newTask.value,
    done: false,
  });

  addTask();
  newTask.value = "";
});
