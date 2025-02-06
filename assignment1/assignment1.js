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

function findTodo() {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  rl.question("Enter the task to find: ", function (task) {
    let found = false;
    for (let i = 0; i < todoList.length; i++) {
      if (todoList[i] === task) {
        console.log("Found task at position: " + (i + 1));
        found = true;
        break;
      }
    }
    if (!found) {
      console.log("Task not found.");
    }
    rl.close();
    askForTodo();
  });
}

function handleAction(action) {
  switch (action.toLowerCase()) {
    case "add":
      const rlAdd = readline.createInterface({
        input: process.stdin,
        output: process.stdout,
      });
      rlAdd.question("Enter the task: ", function (task) {
        try {
          if (!task) throw new Error("Task cannot be empty");
          addTodo(task);
        } catch (error) {
          console.error(error.message);
        } finally {
          rlAdd.close();
          listTodos();
          askForTodo();
        }
      });
      break;
    case "remove":
      removeTodo();
      break;
    case "find":
      findTodo();
      break;
    case "exit":
      console.log("Exiting the to-do list application.");
      break;
    default:
      console.log("Invalid option.");
      listTodos();
      askForTodo();
  }
}

function askForTodo() {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  rl.question(
    "What would you like to do? (add/remove/find/exit): ",
    function (action) {
      rl.close();
      handleAction(action);
    }
  );
}

function main() {
  console.log("Welcome to your to-do list.");
  listTodos();
  askForTodo();
}

main();
