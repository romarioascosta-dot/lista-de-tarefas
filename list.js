const list = document.getElementById("list");
const inputElement = document.getElementById("task_text");
const addButton = document.getElementById("add_button");
const resetButton = document.getElementById("reset_button");

const STORAGE_KEY = "tarefas";

function getTasks() {
  const stored = localStorage.getItem(STORAGE_KEY);
  return stored ? JSON.parse(stored) : [];
}

function saveTasks(tasks) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks));
}

function addNewTask() {
  const text = inputElement.value.trim();

  if (text === "") {
    inputElement.classList.add("input-error");
    inputElement.placeholder = "Digite uma tarefa válida";
    return;
  }

  inputElement.classList.remove("input-error");

  const tasks = getTasks();
  tasks.push(text);
  saveTasks(tasks);

  createTaskItem(text, tasks.length - 1);

  inputElement.value = "";
  inputElement.focus();
}

function createTaskItem(text, index) {
  const listItem = document.createElement("li");
  listItem.className = "list-item";

  const textSpan = document.createElement("span");
  textSpan.textContent = text;

  const removeButton = document.createElement("button");
  removeButton.textContent = "✕";
  removeButton.className = "remove-button";
  removeButton.addEventListener("click", () => removeTask(index, listItem));

  listItem.appendChild(textSpan);
  listItem.appendChild(removeButton);
  list.appendChild(listItem);
}

function removeTask(index, listItem) {
  const tasks = getTasks();
  tasks.splice(index, 1);
  saveTasks(tasks);
  renderTasks(); // re-renderiza pra manter os índices corretos
}

function renderTasks() {
  list.innerHTML = "";
  const tasks = getTasks();
  tasks.forEach((text, index) => createTaskItem(text, index));
}

function resetList() {
  const confirmed = confirm("Tem certeza que deseja apagar todas as tarefas?");
  if (!confirmed) return;

  localStorage.removeItem(STORAGE_KEY);
  list.innerHTML = "";
}

addButton.addEventListener("click", addNewTask);
inputElement.addEventListener("keydown", (event) => {
  if (event.key === "Enter") addNewTask();
});
resetButton.addEventListener("click", resetList);

// Carrega as tarefas salvas ao abrir a página
renderTasks();


















// function addNewTask() { 
//     var list = document.getElementById("list"); 
//     var inputElement = document.getElementById("task_text");
//     var text = inputElement.value; 
    

//     if (text.trim() === "") {
//         alert("Por favor, digite uma tarefa válida.");
//         return;
//     }
    
//     var listItem = document.createElement("li"); 
//     const textElement = document.createTextNode(text); 
    
//     listItem.appendChild(textElement); 
//     list.appendChild(listItem); 
    
    
//     inputElement.value = "";
//     inputElement.focus();
// }


