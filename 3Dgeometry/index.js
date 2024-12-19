const counterValue = document.getElementById('counter-value');
const decreaseButton = document.getElementById('decrease');
const resetButton = document.getElementById('reset');
const increaseButton = document.getElementById('increase');

let count = 0;

decreaseButton.addEventListener('click', () => {
  count--;
  updateCounter();
});

resetButton.addEventListener('click', () => {
  count = 0;
  updateCounter();
});

increaseButton.addEventListener('click', () => {
  count++;
  updateCounter();
});

function updateCounter() {
  counterValue.textContent = count;
}
