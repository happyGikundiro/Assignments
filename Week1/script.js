const sublistEl = document.querySelectorAll(".text-input");
const addbtn = document.querySelector(".add-btn");
const ul = document.querySelector(".lists");
const titleEl = document.querySelector("#title");
const descriptionEl = document.querySelector("#description");
const datetimeEl = document.querySelector("#datetime");

let itemlists = [];

// function to Add new items to the list.
function CreateTodo() {
  addbtn.addEventListener("click", function (e) {
    e.preventDefault();
    const title = titleEl.value;
    const description = descriptionEl.value;
    const dateTime = datetimeEl.value;

    if (!title || !dateTime) {
      alert("Title and due date time are required");
      return;
    }

    const todo = {
      id: Date.now(),
      title,
      description,
      dateTime,
      completed: false,
    };
    itemlists.push(todo);
    DisplayTodos();
    clearForm();

    console.log(itemlists);
  });
}

CreateTodo();

// Function to create new to-do list item elements from the data
function DisplayTodos() {
  ul.innerHTML = "";
  itemlists.forEach((todo) => {
    // creating li element
    const li = document.createElement("li");
    li.classList.add("sub-list");
    li.innerHTML = `
                  <div class="left-content">
          ${
            todo.completed
              ? `<i class="fa-solid fa-circle-check" style="color: cadetblue; font-size: 20px;" onclick="Handlecomplete(${todo.id})"></i>`
              : `<i class="fa-regular fa-circle" style="color: cadetblue; font-size: 20px;" onclick="Handlecomplete(${todo.id})"></i>`
          }
          <div>
            <h4 class="todo-title">${todo.title}</h4>
            <p class="todo-description">${todo.description}</p>
            <p class="todo-date">Due: ${new Date(
              todo.dateTime
            ).toLocaleString()}</p>
          </div>
        </div>
                  <div class="right-content">
                      <i class="fa-solid fa-trash" style="color: #e70000; font-size: 20px" onclick="DeleteTodo(${
                        todo.id
                      })"></i>
                      <i class="fa-solid fa-pen" style="color: cadetblue; font-size: 20px" onclick="EditTodo(${
                        todo.id
                      })"></i>
                  </div>
      `;
    ul.appendChild(li);
  });
}

// function of clearing input values
function clearForm() {
  titleEl.value = "";
  descriptionEl.value = "";
  datetimeEl.value = "";
}

// function of deleting one element in the list of todos
function DeleteTodo(id) {
  itemlists = itemlists.filter((todo) => todo.id != id);
  DisplayTodos();
  alert("Todo deleted");
}

// function of editing one element in the list of todos
function EditTodo(id) {
  const editvalue = itemlists.find((todo) => todo.id === id);
  if (editvalue) {
    titleEl.value = editvalue.title;
    descriptionEl.value = editvalue.description;
    datetimeEl.value = editvalue.dateTime;
    addbtn.innerHTML = "EDIT";
  }
}

// function of changing completion state one element in the list of todos
function Handlecomplete(id) {
  const todo = itemlists.find((todo) => todo.id === id);
  if (todo) {
    todo.completed = !todo.completed;
    DisplayTodos();
  }
}
