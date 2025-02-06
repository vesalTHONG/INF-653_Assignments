// To-Do list using NodeJS

const readline = require("readline");

let todoList = [
  "work on assignment 1",
  "upload assignment to GitHub",
  "write a report",
];

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

function removeTodo() {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  rl.question("Enter the number of the task to remove: ", function (number) {
    const index = parseInt(number) - 1;
    if (index >= 0 && index < todoList.length) {
      todoList.splice(index, 1);
      console.log("Removed task number: " + number);
    } else {
      console.log("Invalid task number.");
    }
    rl.close();
    listTodos();
    askForTodo();
  });
}

function askForTodo() {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  rl.question("Do you want to add a task? (y/n): ", function (answer) {
    if (answer.toLowerCase() === "y") {
      rl.question("Enter the task: ", function (task) {
        try {
          if (!task) throw new Error("Task cannot be empty");
          addTodo(task);
        } catch (error) {
          console.error(error.message);
        } finally {
          rl.close();
          listTodos();
          askForTodo();
        }
      });
    } else {
      rl.question(
        "Do you want to remove a task? (y/n): ",
        function (removeAnswer) {
          if (removeAnswer.toLowerCase() === "y") {
            rl.close();
            removeTodo();
          } else {
            rl.close();
            listTodos();
          }
        }
      );
    }
  });
}

function main() {
  console.log("Welcome to your to-do list.");
  listTodos();
  askForTodo();
}

main();
