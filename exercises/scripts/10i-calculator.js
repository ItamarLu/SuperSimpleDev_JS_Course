let calculation = localStorage.getItem('calculation') || '';

updateP();

function updateCalculation(value) {
  
  calculation += value;
  console.log(calculation);

  localStorage.setItem('calculation',calculation);

  updateP();
}

function updateP() {
  document.querySelector('.js-p-calculation')
    .innerHTML = calculation;
}