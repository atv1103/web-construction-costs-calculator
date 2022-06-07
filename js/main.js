// Элементы формы
const squareInput = document.querySelector("#square-input");
const squareRange = document.querySelector("#square-range");
const inputs = document.querySelectorAll("input");

// Радиокнопки
const radioType = document.querySelectorAll('input[name="type"');
const radioBuilding = document.querySelectorAll('input[name="building"');
const radioRooms = document.querySelectorAll('input[name="rooms"');

// Чекбоксы
const ceiling = document.querySelector('input[name="ceiling"');
const walls = document.querySelector('input[name="walls"');
const floor = document.querySelector('input[name="floor"');

const basePrice = 6000;
const totalPriceElement = document.querySelector("#total-price");

// Связка range с текстовым полем
// Слушаем событие input
squareRange.addEventListener("input", function () {
  squareInput.value = squareRange.value;
});

// Связка текстового поля с range
squareInput.addEventListener("input", function () {
  squareRange.value = squareInput.value;
});

function calculate() {
  let totalPrice = basePrice * parseInt(squareInput.value);
  //   console.log(totalPrice);

  for (const radio of radioType) {
    if (radio.checked === true) {
      totalPrice *= parseFloat(radio.value);
    }
  }
  for (const radio of radioBuilding) {
    if (radio.checked === true) {
      totalPrice *= parseFloat(radio.value);
    }
  }
  for (const radio of radioRooms) {
    if (radio.checked === true) {
      totalPrice *= parseFloat(radio.value);
    }
  }

  if (ceiling.checked === true) {
    totalPrice *= parseFloat(ceiling.value);
  }
  if (walls.checked === true) {
    totalPrice *= parseFloat(walls.value);
  }
  if (floor.checked === true) {
    totalPrice *= parseFloat(floor.value);
  }

  // Форматирование стоимости в зависимости от региона
  const formatter = new Intl.NumberFormat("ru");
  formatter.format(totalPrice);
  totalPriceElement.innerText = formatter.format(totalPrice);
  //   Форматирование стоимости в зависимости от региона //
}

calculate();

for (const item of inputs) {
  item.addEventListener("input", function () {
    calculate();
  });
}
