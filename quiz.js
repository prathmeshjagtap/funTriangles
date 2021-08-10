const quizForm = document.querySelector(".quiz-form");
const submitBtn = document.querySelector("#checkAnswers-btn");
const output = document.querySelector("#output");

const correctAnswers = ["Yes", "90°", "3", "scalene", "isosceles"];

function calculateScore() {
  let score = 0;
  let index = 0;
  const fromData = new FormData(quizForm);
  for (let value of fromData.values()) {
    if (value === correctAnswers[index]) {
      score++;
    }
    index++;
  }
  output.innerText = `Your Score is ${score}`;
}

submitBtn.addEventListener("click", calculateScore);
