const inputs = document.querySelectorAll(".side-input");
const calculateBtn = document.querySelector("#calculateHypotenuse-btn");
const output = document.querySelector("#output");

function calculateSquares(side1, side2) {
  const sumOfSquares = side1 * side1 + side2 * side2;
  return sumOfSquares;
}

function calculateHypotenuse() {
  if (Number(inputs[0].value) != "" && Number(inputs[1].value)) {
    const sumOfSquares = calculateSquares(
      Number(inputs[0].value),
      Number(inputs[1].value)
    );
    const hypotenuse = Math.sqrt(sumOfSquares);
    output.innerText = `The length of hypotenuse is ${hypotenuse}`;
  } else {
    output.innerText = "Please Enter both sides";
  }
}

calculateBtn.addEventListener("click", calculateHypotenuse);
