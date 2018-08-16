/*
---------------------------------------------------------------------------------
 7. The Spread Operator
---------------------------------------------------------------------------------
This is looks like var arg method in java but this is more than that.

In this, an array can be expanded and pass it as arguments to an another function which
Accepts '0' or more number of arguments as values.

*/

// to an array in the middle of the another array
let array1 = [20,30,40];
let array2 = [10,...array1,50,60,70];
console.log(`array2 : ${array2}`);

// array can be expanded as the parameters for another function
let values = [897,21,46564,4,3132,184,694,61,354];
let minValue = Math.min(...values);
console.log(`minValue : ${minValue}`);

// spread operator is used to create new copy an array
let cars1 = ['Audi','BMW','Discover','Baleno'];
//let cars2 = cars1.slice(); // creates a new copy
let cars2 = [...cars1]; // Create a new Copy

if(cars1 === cars2){
    console.log('Both are Equal');
}
else{
    console.log('Both Are NOT Equal');
}









