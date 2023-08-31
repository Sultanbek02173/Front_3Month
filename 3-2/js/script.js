const raateEl = document.getElementById("rate");
const swapEl = document.getElementById("swap");
const currencyOneEl = document.getElementById("currency-one");
const currencyTwoEl = document.getElementById("currency-two");
const amountOneEl = document.getElementById("amount-one");
const amountTwoEl = document.getElementById("amount-two");

console.log(raateEl);
console.log(swapEl);
console.log(currencyOneEl);
console.log(currencyTwoEl);
console.log(amountOneEl);
console.log(amountTwoEl);

let currencyTwoRace = {};

swapEl.onclick = () => {
    raateEl.innerHTML = "";
    let chang;
    chang = currencyOneEl.value;
    currencyOneEl.value = currencyTwoEl.value;
    currencyTwoEl.value = chang;

    let paragraph = document.createElement("p");
    paragraph.innerHTML = `<p>${amountOneEl.value}${currencyOneEl.value} = ${amountTwoEl.value}${currencyTwoEl.value}</p>`;
    raateEl.append(paragraph);

    getData();
}


const getData = () => {
    const currencyOne = currencyOneEl.value;
    const currencyTwo = currencyTwoEl.value;

    fetch(`https://v6.exchangerate-api.com/v6/41b4541f3df8b629ff6e1018/latest/${currencyOne}`)
        .then((responce) => {
            return responce.json();
        })
        .then((data) => {
            console.log(data);
            const { conversion_rates } = data;
            currencyTwoRace = { ...conversion_rates };
            calculedRates(conversion_rates, currencyTwo);
        });
};

const calculedRates = (data, currencyTwo) => {
    const rates = data[currencyTwo];
    amountTwoEl.value = (+amountOneEl.value * rates).toFixed(2);
}

const onCalculade = () => {
    calculedRates(currencyTwoRace, currencyTwoEl.value);
}

amountOneEl.addEventListener('input', onCalculade);
currencyOneEl.addEventListener("change", getData);
currencyTwoEl.addEventListener("change", getData);
