// Create a simple function to add two numbers
function sum(a:number,b:number):number{
    let addition = a + b;
    return addition;
}
console.log(`Sum of a , b is : ${sum(10,20)}`);

// Create the same add function with first number as 'any' type
function sumAny(a:any,b:number):number{
    let sum = 0;
    if(typeof a === 'number'){
        sum = a + b;
    }
    else if(typeof a === 'string'){
        if(isNaN(parseFloat(a))){
            sum = b;
        }
        else{
            sum = parseFloat(a) + b;
        }
    }
    else {
        sum = b;
    }
    return sum;
}
console.log(`Sum of 10 , 20 : ${sumAny(10,20)}`);
console.log(`Sum of '10' , 20 : ${sumAny('10',20)}`);
console.log(`Sum of 'abc' , 20 : ${sumAny('abc',20)}`);
console.log(`Sum of true , 20 : ${sumAny(true,20)}`);

// Function Overloading in TypeScript , findMax of 1 , 2 , 3 numbers
function findMax(a:number):number;
function findMax(a:number,b:number):number;
function findMax(a:number,b:number,c:number):number;
function findMax(a:number,b?:number,c?:number):number{
    // for parameter a
    if(b === undefined && c === undefined){
        return a;
    }
    // for parameter a , b
    else if(c === undefined){
        return Math.max(a , b);
    }
    // for a , b , c
    else{
        return Math.max(a, b ,c);
    }
}
//console.log(`Max : 0-param ${findMax()}`);
console.log(`Max : 1-param ${findMax(10)}`);
console.log(`Max : 2-param ${findMax(10,20)}`);
console.log(`Max : 3-param ${findMax(10,20,30)}`);
//console.log(`Max : 4-param ${findMax(10,20,30,40)}`);