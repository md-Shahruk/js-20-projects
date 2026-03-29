const firstCurrencySelect = document.getElementById("first-currency");
const secondCurrencySelect = document.getElementById("second-currency");

const firstCurrencyInput = document.getElementById("c-first");
const secondCurrencyInput = document.getElementById("c-second");

const exchangeRate = document.getElementById("exchange-rate");

firstCurrencySelect.addEventListener("change", updateRate);
firstCurrencyInput.addEventListener("input", updateRate);
secondCurrencySelect.addEventListener("change", updateRate);
secondCurrencyInput.addEventListener("input",updateRate);


// updateRate();
// function updateRate() {
//   fetch(
//     ` https://v6.exchangerate-api.com/v6/a3b0d70bd74eb8c7b894a09c/latest/${firstCurrencySelect.value}`,
//   )
//     .then((res) => res.json())
//     .then((data) =>{
//       const rate = data.conversion_rates[secondCurrencySelect.value];
//        console.log(rate);
      
//        exchangeRate.innerHTML = `1 ${firstCurrencySelect.value} = ${rate + " " + secondCurrencySelect.value}`;
       
//        secondCurrencyInput.value = (firstCurrencyInput.value * rate).toFixed(2);
//     });
// }

updateRate();
let rate = 1;
async function updateRate() {
  const response = await fetch(`https://v6.exchangerate-api.com/v6/a3b0d70bd74eb8c7b894a09c/latest/${firstCurrencySelect.value}`);
  
  const data = await response.json();
  const rate = data.conversion_rates[secondCurrencySelect.value];
  exchangeRate.innerHTML = `1 ${firstCurrencySelect.value} = ${rate + " " + secondCurrencySelect.value}`;

  secondCurrencyInput.value = (firstCurrencyInput.value * rate).toFixed(2);
  
}