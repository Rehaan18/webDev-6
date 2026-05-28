async function DoCalculation() {
  try {
    const API_URL = "https://official-joke-api.appspot.com/jokes/random";

    const A = Number(document.getElementById("a").value);
    const B = Number(document.getElementById("b").value);

    if (B === 0) {
      document.getElementById("result").innerText = "Cannot divide by zero";
      return;
    }

    let C = A / B;

    document.getElementById("result").innerText = "Result: " + C;

    const response = await fetch(API_URL);
    const data = await response.json();

    console.log(data);

    document.getElementById("joke").innerText =
      data.setup + " - " + data.punchline;
  } catch (error) {
    console.error(error);

    document.getElementById("result").innerText = "Something went wrong!";
  }
}
