const button = document.querySelector("button");
const box = document.getElementById("box");
const input = document.querySelector("input");

const colors = ["red", "blue", "green", "purple"];
let index = 0;

button.addEventListener("click", function () {

    document.body.style.backgroundColor = colors[index];
    index++;

    if (index === colors.length) {
        index = 0;
    }

});

box.addEventListener("mouseover", function () {
    box.style.backgroundColor = "yellow";
});

input.addEventListener("keydown", function (e) {
    console.log("Yazılan:", e.key);
});
