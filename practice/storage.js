let tasks = [];

function taskTemplate(task) {
  return `
    <li ${task.completed ? 'class="strike"' : ""}>
      <p>${task.detail}</p>
      <div>
        <span data-action="delete">❎</span>
        <span data-action="complete">✅</span>
      </div>
    </li>`
}

function renderTasks(tasks) {
  // get the list element from the DOM
  const listElement = document.querySelector("#todoList");
  listElement.innerHTML = "";
  // loop through the tasks array. transform (map) each task object into the appropriate HTML to represent a to-do.
  const html = tasks.map(taskTemplate).join("");
  listElement.innerHTML = html;
}

function newTask() {
  // get the value entered into the #todo input
  const task = document.querySelector("#todo").value;
  // add it to our arrays tasks
  tasks.push({ detail: task, completed: false });
  // render out the list
  renderTasks(tasks);
}

function removeTask(taskElement) {
  // Notice how we are using taskElement instead of document as our starting point?
  // This will restrict our search to the element instead of searching the whole document.
  tasks = tasks.filter(
    (task) => task.detail != taskElement.querySelector('p').innerText
  );
  taskElement.remove();
}

function completeTask(taskElement) {
  const taskIndex = tasks.findIndex(
    (task) => task.detail === taskElement.querySelector('p').innerText
  );
  tasks[taskIndex].completed = tasks[taskIndex].completed ? false : true;
  taskElement.classList.toggle("strike");
  console.log(tasks);
}

function manageTasks(e) {
  // did they click the delete or complete icon?
  console.log(e.target);
  const parent = e.target.closest("li");
  if (e.target.dataset.action === "delete") {
    removeTask(parent);
  }
  if (e.target.dataset.action === "complete") {
    completeTask(parent);
  }
}

// Add your event listeners here
document.querySelector("#submitTask").addEventListener("click", newTask);
document.querySelector("#todoList").addEventListener("click", manageTasks);
document.addEventListener("DOMContentLoaded", setUser);


// render  the initial list of tasks (if any) when the page loads
renderTasks(tasks);

// -----> STEP 2 <----- 

function saveUserName() {
    const nameInput = document.querySelector("#username").value.trim();
    const userDisplay = document.querySelector(".user");

    if (nameInput === "") {
        alert("Please enter your name.");
        return;
    }

    userDisplay.textContent = nameInput;

    document.querySelector("#username").value = "";
}

function loadUserName() {
    const storedName = localStoarge.getItem("todo-user");
    const userDisplay = document.querySelector(".user");

    if (storedName) {
        userDisplay.textContent = storedName;
    }
    else {
        userDisplay.textContent = "[No user set]";
    }
}

document.querySelector("#saveName").addEventListener("click", saveUserName);

loadUserName();


// STEP 3

function setUser() {
  const storedName = localStorage.getItem("todo-user");
  const userDisplay = document.querySelector(".user");

  if (storedName) {
    // If we already have a name saved, show it on the page
    userDisplay.textContent = storedName;
  } else {
    // Otherwise show a placeholder until they enter one
    userDisplay.textContent = "[No user set]";
  }
}
