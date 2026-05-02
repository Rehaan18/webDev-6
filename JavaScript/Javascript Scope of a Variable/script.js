let test = "this is global test variable"; 

function classA()
{ 
  console.log("Class A", test); 
} 

function classB() { 
  console.log("Class B", test); 
} 

function classC() { 
  let test2 = "This is local/block variable"; 
  console.log("Class C", test); 
  console.log("Class C", test2); 
} 

function classD() { 
    let v=4;
  console.log("Class D", test); 
} 

function classE(){

    let a = "rehaan";
    {
      let b = "karan";
      console.log(a); //it will be called since it is a local variable meaning it can be called anywhere inside a function
      console.log(b);
    }
    console.log(b);//it will not be called b is block variable and since it is being called outside the parenthesis 
    
  }

function classF() { 
  console.log("Class F", test); 
} 

function classG() { 
  console.log("Class G", test); 
}

classA()
classB()
classC()
classD()
classE()
classF()
classG()


