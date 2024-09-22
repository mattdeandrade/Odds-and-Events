// TODO: this file! :)
const bank = [];
const odds = [];
const evens = [];

function AddNumber(numberInput) {
  if (Number.isNaN(numberInput)) {
    alert("Not a number!");
    return;
  }
  bank.unshift(numberInput);
  render();

  //render();
}
console.log(bank);
function sortOne(num) {
  if (num % 2 === 0) {
    bank.shift();
    addEven(num);
  }
  if (num % 2 === 1) {
    bank.shift();
    addOdd(num);
  }
}

function sortAll() {
  let banksize = bank.length;
  for (let i = 0; i < banksize; i++) {
    sortOne(bank[0]);
    bank.shift();
  }
  render();
}

function addEven(num) {
  evens.unshift(num);

  render();
}

function addOdd(num) {
  odds.unshift(num);
  render();
}

//Buttons
const $form = document.querySelector("form");
$form.addEventListener("submit", (event) => {
  event.preventDefault();
  const $numberInput = document.querySelector("#number");
  AddNumber(parseInt($numberInput.value));

  $numberInput.value = "";
  console.log(bank);
});

console.log(bank);

const $sortOneButton = document.querySelector("#sortOne");
$sortOneButton.addEventListener("click", () => {
  sortOne(bank[0]);
  render();
});

const $sortAllButton = document.querySelector("#sortAll");
$sortAllButton.addEventListener("click", () => {
  const banksize = bank.length;
  for (let i = 0; i < banksize; i++) {
    sortOne(bank[0]);
  }
  render();
});

//RENDER
function render() {
  renderBank();
  renderEven();
  renderOdd();
}

function renderBank() {
  const $numbers = bank.map((number) => {
    const $number = document.createElement("span");
    $number.textContent = number + ", ";
    return $number;
  });

  const $bankOutput = document.querySelector("#numberBank output");
  $bankOutput.replaceChildren(...$numbers);
}

function renderEven() {
  const $evensBox = evens.map((number) => {
    const $number = document.createElement("span");
    $number.textContent = number + ", ";
    return $number;
  });
  const $evensOutput = document.querySelector("#evens output");
  $evensOutput.replaceChildren(...$evensBox);
}

function renderOdd() {
  const $oddsBox = odds.map((number) => {
    const $number = document.createElement("span");
    $number.textContent = number + ", ";
    return $number;
  });

  const $oddsOutput = document.querySelector("#odds output");
  $oddsOutput.replaceChildren(...$oddsBox);
}

render();
