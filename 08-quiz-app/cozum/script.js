const questions = [
    {
        question: "JavaScript hangi dil türüdür?",
        answers: ["Programlama dili", "Veritabanı", "İşletim sistemi"],
        correct: 0
    },
    {
        question: "CSS ne için kullanılır?",
        answers: ["Tasarım", "Veritabanı", "Sunucu"],
        correct: 0
    }
];

let currentQuestion = 0;
let score = 0;

const questionText = document.getElementById("question");
const answersDiv = document.getElementById("answers");
const nextBtn = document.getElementById("next");
const result = document.getElementById("result");

function showQuestion() {

    answersDiv.innerHTML = "";

    const q = questions[currentQuestion];
    questionText.textContent = q.question;

    q.answers.forEach((answer, index) => {

        const button = document.createElement("button");
        button.textContent = answer;

        button.addEventListener("click", () => {

            if (index === q.correct) {
                button.classList.add("correct");
                score++;
            } else {
                button.classList.add("wrong");
            }

        });

        answersDiv.appendChild(button);
    });
}

nextBtn.addEventListener("click", () => {

    currentQuestion++;

    if (currentQuestion < questions.length) {
        showQuestion();
    } else {
        quiz.innerHTML = "";
        result.textContent = "Skor: " + score;
    }

});

showQuestion();
