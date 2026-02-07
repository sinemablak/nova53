const form = document.querySelector("form");
const input = document.querySelector("input");
const list = document.querySelector("#list");

form.addEventListener("submit", function (e) {

    e.preventDefault();

    const task = input.value;

    const li = document.createElement("li");
    li.textContent = task;

    list.appendChild(li);

    input.value = "";

});
