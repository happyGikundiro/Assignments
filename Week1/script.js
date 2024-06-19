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
