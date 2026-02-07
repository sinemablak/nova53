const form = document.querySelector("form");
const input = document.querySelector("input");
const list = document.querySelector("#list");

let todos = JSON.parse(localStorage.getItem("todos")) || [];

function showTodos() {

    list.innerHTML = "";

    todos.forEach((todo, index) => {

        const li = document.createElement("li");
        li.textContent = todo;

        li.addEventListener("click", () => {
            todos.splice(index, 1);
            saveTodos();
        });

        list.appendChild(li);

    });

}

function saveTodos() {
    localStorage.setItem("todos", JSON.stringify(todos));
    showTodos();
}

form.addEventListener("submit", function (e) {

    e.preventDefault();

    todos.push(input.value);
    input.value = "";

    saveTodos();

});

showTodos();
