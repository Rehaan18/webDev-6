const country = [
    {
        countryCode: "IN",
        countryName: "India",
        currencyCode: "INR"
    },
    {
        countryCode: "US",
        countryName: "USA",
        currencyCode: "USD"
    }
];

function LoadSelectOption() {

    const Country1 = document.getElementById("country1");

    country.forEach((item) => {

        const OP = document.createElement("option");

        OP.value = item.countryCode + "_" + item.currencyCode;

        OP.innerText = item.countryName;

        Country1.appendChild(OP);

    });
}

LoadSelectOption();

function fetchFlag() {

    const code = document.getElementById("country1").value;

    console.log(code);

    const countryCode = code.split("_")[0];
    const currencyCode = code.split("_")[1];

    console.log(countryCode);
    console.log(currencyCode);

    document.getElementById("country1_flag").src =
        `https://flagsapi.com/${countryCode}/flat/64.png`;
}