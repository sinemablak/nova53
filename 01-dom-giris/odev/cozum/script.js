const button = document.querySelector("button");
const title = document.querySelector("h1");

const messages = [
    "JavaScript Harika",
    "DOM Öğreniyorum",
    "Frontend Çok Eğlenceli"
];

let index = 0;

button.addEventListener("click", function () {
    title.textContent = messages[index];
    index++;

    if (index === messages.length) {
        index = 0;
    }
});
