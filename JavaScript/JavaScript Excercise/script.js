var M = 55;
if (M >= 90) {
  console.log("A+");
} else if (M >= 75 && M < 90) {
  console.log("B");
} else if (M >= 50 && M < 75) {
  console.log("C");
} else {
  console.log("Fail");
}

let U = "Rehaan";
let P = "12345";
if (U === "Rehaan" && P === "12345") {
  console.log("Login successful");
} else {
  console.log("Incorrect Passwrod or Username");
}
// U === "Rehaan" && P === "12345"  Different Method to use if else
//   ? console.log("Login successful")
//   : console.log("Incorrect Passwrod or Username");

// True and false thing by the operators
let a = 5,
  b = 6;
console.log(a > 2 && b < 3);

// let data;

// let name = "Rehaan";
// if(name)
// {
//     data=name;
// }
// else
// {
//     data = "N/A";
// }
// console.log(data);

// Now a shorthand method to make above this happen
let data;
let name = "Rehaan";
data = name || "N/A";
console.log(data);

//usage of break and continue
for (let i = 0; i < 5; i++) {
  if (i == 3) {
    continue;
  }
  console.log(i);
}

//Switch case
let choice = 1;
switch (choice) {
  case 1: {
    console.log("Tea");
    break;
  }
  case 2: {
    console.log("Coffee");
    break;
  }
  case 3: {
    console.log("Lassi");
    break;
  }

  default: {
    console.log("Paani");
  }
}
