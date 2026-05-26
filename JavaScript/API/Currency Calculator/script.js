async function convertCurrency() {
  const amount = document.getElementById("amount").value;
  const fromCurrency = document.getElementById("fromCurrency").value;
  const toCurrency = document.getElementById("toCurrency").value;
  const url = `https://api.exchangerate-api.com/v4/latest/${fromCurrency}`;
  const response = await fetch(url);
  const data = await response.json();
  const rate = data.rates[toCurrency];
  const convertedAmount = (amount * rate).toFixed(2);
  document.getElementById("result").innerText =
    `Result : ${amount} ${fromCurrency} = ${convertedAmount} ${toCurrency}`;
}
