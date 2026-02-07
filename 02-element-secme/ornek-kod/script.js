const title = document.getElementById("title");
const paragraphs = document.querySelectorAll(".text");
const button = document.querySelector("button");

button.addEventListener("click", function () {

    title.textContent = "Element Seçildi";

    paragraphs.forEach(function (p) {
        p.style.color = "red";
    });

});
