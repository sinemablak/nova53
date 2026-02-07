const form = document.querySelector("form");
const nameInput = document.querySelector("#name");
const emailInput = document.querySelector("#email");
const result = document.querySelector("#result");

form.addEventListener("submit", function (e) {

    e.preventDefault();

    if (nameInput.value === "" || emailInput.value === "") {
        result.textContent = "Lütfen tüm alanları doldurun";
        return;
    }

    result.textContent = `
        İsim: ${nameInput.value}
        Email: ${emailInput.value}
    `;

});
