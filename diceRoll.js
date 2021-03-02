//My SMART goal: since everything is already in an array, what if I used the array index to add to the sum?
//refactoring goal: clean and DRY

document.addEventListener("DOMContentLoaded", () => {
  const diceValue = [
    "&#9856",
    "&#9857",
    "&#9858",
    "&#9859",
    "&#9860",
    "&#9861",
  ];

  const diceInput = document.getElementById("dice-input");
  const diceOutput = document.getElementById("dice-para");
  let sumOutput = document.getElementById("sum-para");
  const button = document.getElementById("dice-roll-button");
  const ul = document.querySelector("ul");

  button.addEventListener("click", () => {
    let sum = 0;
    let arr = [];
    for (let i = 0; i < diceInput.value; i++) {
      arr[i] = diceValue[Math.floor(Math.random() * 6)];
      if (diceValue.includes(arr[i])) {
        sum += diceValue.indexOf(arr[i]) + 1;
      }
    }
    let newRoll = document.createElement("li");
    newRoll.innerHTML = `${sum} ${arr.join("")}`;
    ul.appendChild(newRoll);

    sumOutput.innerHTML = `Sum = ${sum}`;
    diceOutput.innerHTML = arr.join("");
  });
});

console.log("hello");