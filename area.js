const inputs = document.querySelectorAll(".inputs");
const calculateBtn = document.querySelector("#calculateBtn");
const output = document.querySelector("#output");

function multiplication(base, height) {
  const multiply = base * height;
  return multiply;
}

function calculateArea() {
  if (Number(inputs[0].value) != "" && Number(inputs[1].value) != "") {
    const multiply = multiplication(
      Number(inputs[0].value),
      Number(inputs[1].value)
    );

    const Area = multiply / 2;

    output.innerText = `Area of traingle is ${Area}`;
  } else {
    output.innerText = "Please enter Base and Height";
  }
}

calculateBtn.addEventListener("click", calculateArea);
