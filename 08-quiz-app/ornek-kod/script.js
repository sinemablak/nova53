const questions = [
    {
        question: "JavaScript hangi dil türüdür?",
        answers: ["Programlama dili", "Veritabanı", "İşletim sistemi"],
        correct: 0
    },
    {
        question: "HTML ne için kullanılır?",
        answers: ["Stil", "Yapı", "Veritabanı"],
        correct: 1
    }
];

let currentQuestion = 0;

const questionText = document.getElementById("question");
const answersDiv = document.getElementById("answers");
const nextBtn = document.getElementById("next");

function showQuestion() {

    const q = questions[currentQuestion];

    questionText.textContent = q.question;
    answersDiv.innerHTML = "";

    q.answers.forEach(answer => {

        const button = document.createElement("button");
        button.textContent = answer;

        answersDiv.appendChild(button);
    });
}

nextBtn.addEventListener("click", () => {
    currentQuestion++;
    showQuestion();
});

showQuestion();
