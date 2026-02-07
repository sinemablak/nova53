const input = document.getElementById("note");
const button = document.querySelector("button");
const result = document.getElementById("result");

button.addEventListener("click", function () {

    const note = input.value;

    localStorage.setItem("note", note);

    result.textContent = note;

});

window.addEventListener("load", function () {

    const savedNote = localStorage.getItem("note");

    if (savedNote) {
        result.textContent = savedNote;
    }

});
