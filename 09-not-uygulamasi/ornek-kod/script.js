const form = document.querySelector("form");
const titleInput = document.querySelector("#title");
const contentInput = document.querySelector("#content");
const notesDiv = document.querySelector("#notes");

form.addEventListener("submit", function (e) {

    e.preventDefault();

    const noteDiv = document.createElement("div");
    noteDiv.classList.add("note");

    noteDiv.innerHTML = `
        <h3>${titleInput.value}</h3>
        <p>${contentInput.value}</p>
    `;

    notesDiv.appendChild(noteDiv);

    form.reset();

});
