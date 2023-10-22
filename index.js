// app.js

const readline = require('readline');
const todoList = require('./ToDoList');

// Create an interface for reading input and writing output
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Display the menu options
function displayMenu() {
  console.log('=== Todo List ===');
  console.log('1. Add a task');
  console.log('2. Update a task');
  console.log('3. Delete a task');
  console.log('0. Exit');
}

// Ask for user input
function askQuestion(question) {
  return new Promise((resolve) => {
    rl.question(question, (answer) => {
      resolve(answer);
    });
  });
}

// Main function to run the Todo List application
async function runTodoListApp() {
  let choice = '';

  while (choice !== '0') {
    displayMenu();

    choice = await askQuestion('Enter your choice: ');

    switch (choice) {
      case '1':
        const task = await askQuestion('Enter the task: ');
        todoList.addTask(task);
        break;
      case '2':
        const index = parseInt(await askQuestion('Enter the task index: '));
        const updatedTask = await askQuestion('Enter the updated task: ');
        todoList.updateTask(index, updatedTask);
        break;
      case '3':
        const deleteIndex = parseInt(await askQuestion('Enter thetask index to delete: '));
        todoList.deleteTask(deleteIndex);
        break;
      case '0':
        console.log('Exiting...');
        break;
      default:
        console.log('Invalid choice. Please try again.');
    }
  }

  rl.close();
}

runTodoListApp();