"use strict"; // Invokes strict mode for the entire script

// 1. Prevents use of undeclared variables
x = 3.14; // Throws a ReferenceError: x is not defined

// 2. Prevents deleting undeclared functions/variables
var y = 1;
delete y; // Throws a SyntaxError

// 3. Duplicating parameter names is not allowed
function sum(a, a, b) { // Throws a SyntaxError
  return a + a + b;
}
