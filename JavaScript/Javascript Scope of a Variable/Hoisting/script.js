// Hoisting is JavaScript's default behavior where:

// Declarations are moved to the top of their scope
// Execution happens later line by line
// Important:

// Only declarations are hoisted, not initializations

var a;
var b;
var c;
abc();


a=10;
console.log(a);
console.log(b);
console.log(c);
b=20;
console.log(a);
console.log(b);
console.log(c);
c=30;
console.log(a);
console.log(b);
console.log(c);
      

function abc()
{
    console.log("The function is called")
}