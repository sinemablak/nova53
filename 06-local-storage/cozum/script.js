const input = document.querySelector("input");
const button = document.querySelector("button");
const result = document.querySelector("#result");

let notes = JSON.parse(localStorage.getItem("notes")) || [];

button.addEventListener("click", function () {

    notes.push(input.value);

    localStorage.setItem("notes", JSON.stringify(notes));

    showNotes();

});

function showNotes() {

    result.innerHTML = "";

    notes.forEach(function (note) {

        const p = document.createElement("p");
        p.textContent = note;

        result.appendChild(p);

    });

}

showNotes();
