let taskInput = document.getElementById("new-task"); //Add a new task.
let todoList = document.getElementById("todo-list"); //ul of #incomplete-tasks

function createNewTaskElement(taskString) {
  let listItem = document.createElement("li");
  let checkBox = document.createElement("input"); //checkbx
  let label = document.createElement("label"); //label
  let deleteButton = document.createElement("button"); //delete button

  label.innerText = taskString;
  checkBox.type = "checkbox";
  deleteButton.innerText = "Delete";
  deleteButton.className = "delete";

  listItem.appendChild(checkBox);
  listItem.appendChild(label);
  listItem.appendChild(deleteButton);
  return listItem;
};

function addTask() {
  let listItem = createNewTaskElement(taskInput.value);
  todoList.appendChild(listItem);
  bindTaskEvents(listItem);
  taskInput.value = "";
};

function deleteTask() {
  let listItem = this.parentNode;
  let ul = listItem.parentNode;
  ul.removeChild(listItem);
};

function bindTaskEvents(taskListItem) {
  let deleteButton = taskListItem.querySelector("button.delete");
  console.log(deleteButton);
  		deleteButton.onclick = deleteTask;
};

for (let i=0; i<todoList.children.length;i++){
		bindTaskEvents(todoList.children[i]);
}
