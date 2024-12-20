
const todoInput = document.getElementById("todoInput");
const addButton = document.getElementById("addButton");
const todoList = document.getElementById("todoList");

function createTodoItem(task) {
  const todoItem = document.createElement("div");
  todoItem.classList.add("todo-item");

  const taskText = document.createElement("span");
  taskText.textContent = task;


  // Icon 1
  const deleteIcon = document.createElement("i");
  deleteIcon.classList.add("delete-icon", "fas", "fa-trash-alt");
  deleteIcon.addEventListener("click", function () {
    todoList.removeChild(todoItem);
  });

  //  Icon 2
  const completedIcon = document.createElement("i");
  completedIcon.classList.add("fas", "fa-check-circle");

  completedIcon.addEventListener("click", function () {
    taskText.style.textDecoration = "line-through";
    taskText.style.color = "#008cba";
    completedIcon.classList.add("completed-icon");
  });

  
  todoItem.appendChild(taskText);
  todoItem.appendChild(deleteIcon);
  todoItem.appendChild(completedIcon);
  todoList.appendChild(todoItem);
}

function addTask() {
  const task = todoInput.value.trim();
  if (task !== "") {
    createTodoItem(task);
    todoInput.value = ""; 
  }
}

addButton.addEventListener("click", addTask);

todoInput.addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    addTask();
  }
});
