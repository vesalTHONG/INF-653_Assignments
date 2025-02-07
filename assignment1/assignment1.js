// To-Do list using NodeJS

const readline = require("readline");

let todoList = [
  "work on assignment 1",
  "upload assignment to GitHub",
  "write a report",
]; // Initial to-do list

// Function to list all to-dos
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

// Function to add a new to-do
function addTodo() {
  const rlAdd = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  rlAdd.question("Enter the task: ", function (task) {
    try {
      if (!task) throw new Error("Task cannot be empty"); // Throw error if task is empty
      todoList.push(task); // Add the task to the list
      console.log("Added to-do: " + task); // Confirm the addition
    } catch (error) {
      console.error(error.message); // Print error message
    } finally {
      rlAdd.close(); // Close the readline interface
      listTodos(); // List all tasks
      askForTodo(); // Ask for the next action
    }
  });
}

// Function to remove a to-do by its number
function removeTodo() {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  }); // Create readline interface

  rl.question("Enter the number of the task to remove: ", function (number) {
    const index = parseInt(number) - 1;
    if (index >= 0 && index < todoList.length) {
      todoList.splice(index, 1);
      console.log("Removed task number: " + number);
    } else {
      console.log("Invalid task number."); // Print error message for invalid index
    }
    rl.close(); // Close the readline interface
    listTodos();
    askForTodo(); // Ask for the next action
  });
}

// Function to find a to-do by its name
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
        break; // Exit the loop once the task is found
      }
    }
    if (!found) {
      console.log("Task not found.");
    }
    rl.close();
    askForTodo();
  });
}

// Function to handle the user's action
function handleAction(action) {
  switch (action.toLowerCase()) {
    case "add":
      addTodo();
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

// Function to ask the user for the next action
function askForTodo() {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  rl.question(
    "What would you like to do? (add/remove/find/exit): ",
    function (action) {
      rl.close();
      handleAction(action); // Handle the user's action
    }
  );
}

// Main function to start the application
function main() {
  console.log("Welcome to your to-do list.");
  listTodos();
  askForTodo();
}

main();
