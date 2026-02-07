const buttons = document.querySelectorAll("button");
const box = document.querySelector(".box");

buttons[0].addEventListener("click", function () {
    box.style.backgroundColor = "blue";
});

buttons[1].addEventListener("click", function () {
    box.style.width = "200px";
    box.style.height = "200px";
});

buttons[2].addEventListener("click", function () {

    if (box.style.display === "none") {
        box.style.display = "block";
    } else {
        box.style.display = "none";
    }

});
