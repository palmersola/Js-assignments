const add = document.getElementById("addTodo");
const newTodo = document.getElementById("todo");
const listDiv = document.getElementById("list");

class Todo {
  constructor(doit) {
    this.id = Math.round(new Date().getTime() + Math.random() * 100000);
    this.todo = doit;
  }
}

class Todos {
  constructor() {
    this.todoList = [];
  }
  getTodos = () => this.todoList;
  newTodo = doit => this.todoList.push(new Todo(doit));
  removeTodo = didit => (this.todoList = this.todoList.filter(todo => todo.id != didit));
}

let list = new Todos();

butHand = delButt => {
  for (button of delButt) {
    button.addEventListener("click", e => {
      e.preventDefault();
      list.removeTodo(e.target.id);
      display();
    });
  }
};

display = () => {
  localStorage.setItem("todo list", JSON.stringify(list.getTodos()));
  listDiv.innerHTML = "";
  list.getTodos().map(todo => {
    let del = document.createElement("button");
    del.innerText = todo.todo;
    del.classList.add("delete");
    del.setAttribute("id", todo.id);
    listDiv.append(del);
  });
  butHand(document.getElementsByClassName("delete"));
};

add.addEventListener("submit", e => {
  e.preventDefault();
  list.newTodo(newTodo.value);
  add.reset();
  display();
});

set = () =>
  localStorage.getItem("todo list")
    ? (list.todoList = JSON.parse(localStorage.getItem("todo list")))
    : localStorage.setItem("todo list", JSON.stringify([]));

init = () => {
  set();
  display();
};

init();
