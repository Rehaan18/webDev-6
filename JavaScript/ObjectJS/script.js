let fd = [
  ["Rehaan", "18-11-2006", 8871412826, "Bhopal", "TEacher"],
  ["Atif", "18-06-2005", 8871412826, "Bhopal", "TEacher"],
  ["Karan", "22-01-2005", 8871412826, "Bhopal", "TEacher"],
  ["Nandini", "05-03-2005", 8871412826, "Bhopal", "TEacher"],
  ["Munazzar", "16-09-2004", 8871412826, "Bhopal", "TEacher"],
];

fd.forEach((element) => {
  console.log(element);
});
// The above was a old format to store element


let FData = [
  {
    name: "Rehaan",
    dob: "18-11-2006",
    phone: 8871412826,
    city: "Bhopal",
    occupation: "Teacher",
  },
  {
    name: "Atif",
    dob: "18-06-2005",
    phone: 8871412826,
    city: "Bhopal",
    occupation: "Teacher",
  },
  {
    name: "Karan",
    dob: "22-01-2005",
    phone: 8871412826,
    city: "Bhopal",
    occupation: "Teacher",
  },
  {
    name: "Nandini",
    dob: "05-03-2005",
    phone: 8871412826,
    city: "Bhopal",
    occupation: "Teacher",
  },
  {
    name: "Munazzar",
    dob: "16-09-2004",
    phone: 8871412826,
    city: "Bhopal",
    occupation: "Teacher",
  },
];

FData.forEach((item) => {
  console.log(item["name"]);
});

FData.map((element, idx)
=>
{
    console.log(idx);
    console.log(element.phone);
}
);

console.log(FData);
console.log(FData[0]["name"]); //for the json notation: FData.name

let obj = {
  name: "Rehaan",
  dob: "18-11-2006",
  phone: 8871412826,
  city: "Bhopal",
  occupation: "Teacher",
};

console.log(Object.values(obj));
console.log(Object.keys(obj));


let arr=[1,2,3,34,4,5,6,6,354,7,5,89,45,24,89]

arr.sort((a , b) => a - b);
console.log(arr)

console.log(arr.find((val)=> val>40));
console.log(arr.findIndex((val)=> val==5));
console.log(arr.findLastIndex((val)=> val==5));

let ar=[1,2,3,34,4,5,6,6,354,7,5,89,45,24,89,23245]

console.log(ar.filter((val) => val>20));
console.log(ar.find((val) => val>20));