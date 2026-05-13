let calculateBtn = document.getElementById("calculateBtn");

calculateBtn.addEventListener("click", function () {
  let km = document.getElementById("kmInput").value;
  let error = document.getElementById("error");
  let resultSection = document.getElementById("resultSection");
  let totalBill = document.getElementById("totalBill");
  let breakdown = document.getElementById("breakdown");

  if (km === "" || km <= 0) {
    error.innerHTML = "Please enter valid kilometers";
    resultSection.classList.add("d-none");
    return;
  }
  error.innerHTML = "";

  km = Number(km);
  let bill = 0;

  if (km <= 10) {
    bill = km * 11;
  } else if (km <= 30) {
    bill = 10 * 11 + (km - 10) * 10;
  } else {
    bill = 10 * 11 + 20 * 10 + (km - 30) * 8;
  }

  totalBill.innerHTML = "₹ " + bill;
  breakdown.innerHTML = `
    First 10 KM = ₹11 per KM <br>
    Next 20 KM = ₹10 per KM <br>
    Above 30 KM = ₹8 per KM
  `;

  resultSection.classList.remove("d-none");
});
