const currenctFirstEl = document.getElementById("currency-first");
const worthFirstEl = document.getElementById('worth-first');
const worthSecondEl = document.getElementById('worth-second');
const currenctSecondEl = document.getElementById("currency-second");

const exchangeRateEl = document.getElementById('exchange-rate');





const apiKey = '7a8793b3606b62f429256da6';
updateRate()
 function updateRate() {

    fetch(`https://v6.exchangerate-api.com/v6/${apiKey}/latest/${currenctFirstEl.value}`).then((res) => res.json()).then((data) => {
        const rate = data.conversion_rates[currenctSecondEl.value];


exchangeRateEl.innerText = ` 1    ${currenctFirstEl.value}  = ${ rate+ "  "  + currenctSecondEl.value}`


worthSecondEl.value = (worthFirstEl.value * rate).toFixed(3);



    })





}




currenctFirstEl.addEventListener("change", updateRate);

currenctSecondEl.addEventListener("change", updateRate);



worthFirstEl.addEventListener("input", updateRate);










