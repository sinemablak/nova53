const form = document.querySelector("form");
const titleInput = document.querySelector("#title");
const contentInput = document.querySelector("#content");
const notesDiv = document.querySelector("#notes");

let notes = JSON.parse(localStorage.getItem("notes")) || [];

function showNotes() {

    notesDiv.innerHTML = "";

    notes.forEach((note, index) => {

        const div = document.createElement("div");
        div.classList.add("note");

        div.innerHTML = `
            <h3>${note.title}</h3>
            <p>${note.content}</p>
            <small>${note.date}</small>
            <br>
            <button class="delete">Sil</button>
        `;

        div.querySelector(".delete").addEventListener("click", () => {
            notes.splice(index, 1);
            saveNotes();
        });

        notesDiv.appendChild(div);

    });

}

function saveNotes() {
    localStorage.setItem("notes", JSON.stringify(notes));
    showNotes();
}

form.addEventListener("submit", function (e) {

    e.preventDefault();

    const newNote = {
        title: titleInput.value,
        content: contentInput.value,
        date: new Date().toLocaleDateString()
    };

    notes.push(newNote);

    form.reset();
    saveNotes();

});

showNotes();
