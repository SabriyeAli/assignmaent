// todoList.js

const fs = require('fs');

// Function to add a new task to the Todo List
function addTask(task) {
  // Load existing tasks from file
  const tasks = loadTasks();

  // Add the new task
  tasks.push(task);

  // Save the updated tasks to file
  saveTasks(tasks);

  console.log('Task added successfully.');
}

// Function to update an existing task in the Todo List
function updateTask(index, updatedTask) {
  // Load existing tasks from file
  const tasks = loadTasks();

  // Check if the index is valid
  if (index >= 0 && index < tasks.length) {
    // Update the task
    tasks[index] = updatedTask;

    // Save the updated tasks to file
    saveTasks(tasks);

    console.log('Task updated successfully.');
  } else {
    console.log('Invalid task index.');
  }
}

// Function to delete a task from the Todo List
function deleteTask(index) {
  // Load existing tasks from file
  const tasks = loadTasks();

  // Check if the index is valid
  if (index >= 0 && index < tasks.length) {
    // Remove the task
    tasks.splice(index, 1);

    // Save the updated tasks to file
    saveTasks(tasks);

    console.log('Task deleted successfully.');
  } else {
    console.log('Invalid task index.');
  }
}

// Function to load tasks from file
function loadTasks() {
  try {
    const tasksData = fs.readFileSync('tasks.json', 'utf8');
    return JSON.parse(tasksData);
  } catch (error) {
    // If the file doesn't exist or there's an error reading it, return an empty array
    return [];
  }
}

// Function to save tasks to file
function saveTasks(tasks) {
  const tasksData = JSON.stringify(tasks, null, 2);
  fs.writeFileSync('tasks.json', tasksData, 'utf8');
}

module.exports = {
  addTask,
  updateTask,
  deleteTask,
};