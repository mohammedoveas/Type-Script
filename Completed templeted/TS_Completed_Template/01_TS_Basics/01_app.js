// Hello World App
var greeting = "Good Afternoon";
console.log(greeting);
document.querySelector('#display').textContent = greeting;
// Variables Creation in TypeScript
function greetMsg(name, age) {
    var greeting = "Hello " + name + " You are " + age + " years Old!!";
    return greeting;
}
var greetingMessage = greetMsg('John', 40);
console.log(greetingMessage);
document.querySelector('#display').textContent = greetingMessage;
