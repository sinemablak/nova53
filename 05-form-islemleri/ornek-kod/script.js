const form = document.getElementById("form");
const nameInput = document.getElementById("name");
const result = document.getElementById("result");

form.addEventListener("submit", function (e) {

    e.preventDefault();

    const name = nameInput.value;

    result.textContent = "Merhaba " + name;

});
