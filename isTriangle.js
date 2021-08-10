const inputs = document.querySelectorAll(".angle-input");
const isTriangleBtn = document.querySelector("#isTraingle-btn");
const output = document.querySelector("#output");

function calculateSumOfAngles(angle1, angle2, angle3) {
  const sumOfAngles = angle1 + angle2 + angle3;
  return sumOfAngles;
}

function isTriangle() {
  if (
    Number(inputs[0].value) != "" &&
    Number(inputs[1].value) != "" &&
    Number(inputs[2].value) != ""
  ) {
    const sumOfAngles = calculateSumOfAngles(
      Number(inputs[0].value),
      Number(inputs[1].value),
      Number(inputs[2].value)
    );
    if (sumOfAngles === 180) {
      output.innerText = "Yay, the angles form a Traingle";
    } else {
      output.innerText = "Oops!, the angles don't form a Traingle";
    }
  } else {
    output.innerText = "Please Enter values of All angles";
  }
}

isTriangleBtn.addEventListener("click", isTriangle);
