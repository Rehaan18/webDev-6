let salaryInput = document.getElementById("basicSalary");
let calculateBtn = document.getElementById("calculateBtn");

let resetBtn = document.getElementById("resetBtn");

let errorMessage = document.getElementById("errorMessage");
let successMessage = document.getElementById("successMessage");
let resultCard = document.getElementById("resultCard");

let resultBasic = document.getElementById("resultBasic");

let resultHra = document.getElementById("resultHra");
let resultDa = document.getElementById("resultDa");
let resultGross = document.getElementById("resultGross");

calculateBtn.addEventListener("click", function () {
  let salary = salaryInput.value;

  errorMessage.innerHTML = "";
  successMessage.classList.add("d-none");
  if (salary === "" || salary < 0) {
    errorMessage.innerHTML = "Please enter valid salary";
    resultCard.classList.add("d-none");

    return;
  }

  salary = Number(salary);

  let hra = salary * 0.2;
  let da = salary * 0.1;
  let gross = salary + hra + da;
  resultBasic.innerHTML = "₹ " + salary;
  resultHra.innerHTML = "₹ " + hra;
  resultDa.innerHTML = "₹ " + da;
  resultGross.innerHTML = "₹ " + gross;
  resultCard.classList.remove("d-none");
  successMessage.classList.remove("d-none");
});
resetBtn.addEventListener("click", function () {
  salaryInput.value = "";
  errorMessage.innerHTML = "";
  successMessage.classList.add("d-none");
  resultCard.classList.add("d-none");
});
