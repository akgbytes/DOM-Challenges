const taskInput = document.getElementById("taskInput");

const addButton = document.getElementById("addButton");

const taskList = document.getElementById("taskList");

const totalTasks = document.getElementById("totalTasks");

const completedTasks = document.getElementById("completedTasks");

let totalTaskAdded = 0;
let totalCompletedTasks = 0;

addButton.addEventListener("click", () => {
  if (!totalTaskAdded) {
    taskList.innerText = "";
  }

  if (!taskInput.value) return;
  const li = document.createElement("li");
  li.setAttribute("class", "task-item task-text");
  taskList.appendChild(li);

  const checkbox = document.createElement("input");

  checkbox.setAttribute("class", "complete-checkbox");

  checkbox.setAttribute("data-status", "false");

  checkbox.setAttribute("type", "checkbox");

  li.appendChild(checkbox);

  const taskDiv = document.createElement("div");
  taskDiv.innerText = taskInput.value.trim();
  taskDiv.setAttribute("class", "task-text");
  li.appendChild(taskDiv);

  const deleteBtn = document.createElement("button");
  deleteBtn.innerText = "Delete";
  deleteBtn.setAttribute("class", "delete-button");
  li.appendChild(deleteBtn);

  deleteBtn.addEventListener("click", () => {
    taskList.removeChild(li);
    totalTaskAdded--;
    totalTasks.innerText = `Total tasks: ${totalTaskAdded}`;

    if (!totalTaskAdded) {
      taskList.innerHTML = `<li class="empty-list">No tasks yet. Add one above!</li>`;
    }
  });

  checkbox.addEventListener("input", () => {
    if (checkbox.checked) {
      checkbox.dataset.status = "true";
      li.classList.add("completed");
      totalCompletedTasks++;
    } else {
      checkbox.dataset.status = "false";
      li.classList.remove("completed");
      totalCompletedTasks--;
    }

    completedTasks.innerText = `Completed: ${totalCompletedTasks}`;
  });

  totalTaskAdded++;

  totalTasks.innerText = `Total tasks: ${totalTaskAdded}`;

  taskInput.value = "";
});
