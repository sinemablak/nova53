const button = document.getElementById("btn");
const box = document.getElementById("box");
const input = document.querySelector("input");

button.addEventListener("click", function () {
    alert("Butona tıklandı!");
});

box.addEventListener("mouseover", function () {
    box.style.backgroundColor = "orange";
});

input.addEventListener("keydown", function () {
    console.log("Tuşa basıldı");
});
