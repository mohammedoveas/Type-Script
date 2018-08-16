// Hello World App
let greeting:string = "Good Afternoon";
console.log(greeting);
document.querySelector('#display').textContent = greeting;

// Variables Creation in TypeScript
function greetMsg(name:string , age:number):string{
    let greeting:string = "Hello " + name + " You are " + age + " years Old!!";
    return greeting;
}

let greetingMessage:string = greetMsg('John',40);
console.log(greetingMessage);
document.querySelector('#display').textContent = greetingMessage;
