function fetchFlag(selectId, flagId) {
  const select = document.getElementById(selectId);
  const selectedOption = select.options[select.selectedIndex];
  const countryCode = selectedOption.getAttribute("data-country");
  const flagImg = document.getElementById(flagId);

  if (countryCode && countryCode !== "EU") {
    flagImg.src = `https://flagsapi.com/${countryCode}/flat/64.png`;
    flagImg.style.display = "inline";
  } else if (countryCode === "EU") {
    flagImg.src = `https://flagsapi.com/EU/flat/64.png`;
    flagImg.style.display = "inline";
  } else {
    flagImg.style.display = "none";
  }
}

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

// Show default flags on page load
window.addEventListener("DOMContentLoaded", () => {
  fetchFlag("fromCurrency", "fromFlag");
  fetchFlag("toCurrency", "toFlag");
});
