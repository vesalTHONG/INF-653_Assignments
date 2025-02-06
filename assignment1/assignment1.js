// To-Do list using NodeJS

const readline = require("readline");

let todoList = [];

function listTodos() {
  if (todoList.length === 0) {
    console.log("No tasks for today.");
  } else {
    console.log("Todos:");
    for (let i = 0; i < todoList.length; i++) {
      console.log(i + 1 + ". " + todoList[i]);
    }
  }
}

function addTodo(todo) {
  todoList.push(todo);
  console.log("Added to-do: " + todo);
}

function askForTodo() {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  rl.question("Do you want to add a task? (y/n): ", function (answer) {
    if (answer.toLowerCase() === "y") {
      rl.question("Enter the task: ", function (task) {
        addTodo(task);
        rl.close();
        listTodos();
      });
    } else {
      rl.close();
      listTodos();
    }
  });
}

console.log("Welcome to your to-do list.");
listTodos();
askForTodo();
