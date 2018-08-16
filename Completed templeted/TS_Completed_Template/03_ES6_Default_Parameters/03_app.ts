/*
---------------------------------------------------------------------------------
    1. Default Parameters
---------------------------------------------------------------------------------
    This feature is to provide some default values to optional parameters.
    If any of the parameter is not supplied the program will be using this default
parameters
*/

// Create a function and provide few default parameters using ES6
function greet(name:string,age:number=30):string{
    let greetMsg = "Good Morning " + name + " You are " + age + " years Old!";
    return greetMsg;
}
let greeting = greet('John');

console.log(greeting);
document.querySelector('#display').textContent = greeting;



