const title = document.getElementById("title");
const paragraphs = document.querySelectorAll(".text");
const button = document.querySelector("button");

const colors = ["blue", "green", "purple"];

button.addEventListener("click", function () {

    title.textContent = "Ödev Çözümü";

    paragraphs.forEach(function (p, index) {
        p.style.color = colors[index];
    });

});
