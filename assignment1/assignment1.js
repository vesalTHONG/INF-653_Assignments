//To-Do list using NodeJS

let todoList = [];

function addTodo() {
  let todo = process.argv[3];
  todoList.push(todo);
  console.log("Added todo: " + todo);
}

function listTodos() {
  if (todoList.length === 0) {
    console.log("No tasks for today.");
    return;
  } else {
    console.log("Todos:");
    for (let i = 0; i < todoList.length; i++) {
      console.log(i + 1 + ". " + todoList[i]);
    }
  }
}

console.log("Welcome to your to-do list.");
listTodos();
