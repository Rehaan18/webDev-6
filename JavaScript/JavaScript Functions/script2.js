const abc = function () {
  //abc is callback function and the whole function code is called function expression...do not use callback function with let use const..because const has a rule that if a value has given to it the value can not be changed amd saves us with the accidental change
  console.log("Hello betch");
};

console.log(abc); //this type of function is called function expression!! function is stored in a variable

//let abc = 20; because we used let in callback function the function of abc has an error
abc(); //after adding parenthesis it the variable abc became a function


//Now the Arrow Function which is a another way to write the function expression
const arrowfun = ()=>
{
    console.log("I am arrow function");
}

arrowfun();


const addarrow = (a,b)=>
{
    return a+b;
};
console.log(addarrow(5,6));



//another way to do it
// const addarrow = (a,b)=> a+b;
// console.log(addarrow(5,6));