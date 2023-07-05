const taskForm = document.getElementById("taskForm");
const taskInput = document.getElementById("taskInput");
const employeeNameInput = document.getElementById("employeeNameInput");
const designationInput = document.getElementById("designationInput");
const taskList = document.getElementById("taskList");

taskForm.addEventListener("submit", (event) => {
  event.preventDefault();
  addTask(
    taskInput.value,
    employeeNameInput.value,
    designationInput.value
  );
    taskInput.value = "";
    employeeNameInput.value = "";
    designationInput.value = "";
  });

  function addTask(taskText, employeeName, designation) {
    const taskItem = document.createElement("li");
    taskItem.classList.add("taskItem");

    const taskInfo = document.createElement("div");
    taskInfo.innerHTML = `
     <strong>Task:</strong> ${taskText}<br>
     <strong>Employee:</strong> ${employeeName}<br>
     <strong>Designation:</strong> ${designation}
      `;

    const removeBtn = document.createElement("button");
    removeBtn.classList.add("removeBtn");
    removeBtn.textContent = "Remove";
    removeBtn.addEventListener("click", () => {
    taskList.removeChild(taskItem);
  });

  taskItem.appendChild(taskInfo);
  taskItem.appendChild(removeBtn);
  taskList.appendChild(taskItem);
}