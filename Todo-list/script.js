function addTask() {
  const taskInput = document.getElementById("todo-input");
  const taskText = taskInput.value.trim();

  if (taskText !== "") {
    const taskList = document.getElementById("todo-list");

    const newTask = document.createElement("li");
    newTask.innerHTML = `${taskText} 
      <button onclick="deleteTask(this)">Delete</button>
      <button onclick="markAsDone(this)">Done</button>`;

    taskList.appendChild(newTask);
    taskInput.value = ""; // Clear the input field

    setTimeout(() => {
      newTask.style.opacity = "1"; // Trigger fade-in
    }, 10);
  }
}

function deleteTask(button) {
  const task = button.parentElement;
  task.style.animation = "fadeOut 0.3s forwards";
  setTimeout(() => task.remove(), 300); // Wait for animation to complete before removing
}

function markAsDone(button) {
  const task = button.parentElement;
  const completedList = document.getElementById("completed-list");

  task.classList.add("completed-task");
  task.style.animation = "slideRight 0.3s ease";

  setTimeout(() => {
    completedList.appendChild(task); // Move to completed list
    task.querySelector('button:last-child').remove(); // Remove the "Done" button
    task.style.opacity = "1"; // Reset opacity after animation
  }, 300);
}
