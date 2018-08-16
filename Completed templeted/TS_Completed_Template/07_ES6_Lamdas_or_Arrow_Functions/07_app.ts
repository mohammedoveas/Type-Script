/*
---------------------------------------------------------------------------------
 5. Lambdas (Arrow Functions)
---------------------------------------------------------------------------------
A lambda expression is an anonymous function that you can use to create
delegates or expression tree types. By using lambda expressions,
you can write local functions that can be passed as arguments or
returned as the value of function calls

*/

// Normal function 1
let greetNormal = function() {
  return "Good Morning";
};
console.log(greetNormal());

let greetArrow = () => "Good Morning";
console.log(greetArrow());

// Normal Function 2
let greetMeNormal = function(name) {
  return `Good Morning ${name}`;
};
console.log(greetMeNormal('John'));

let greetMeArrow = (name) => `Good Morning ${name}`;
console.log(greetMeArrow('Williams'));


// Normal Function 3
let sumNormal = function (a , b) {
    return a + b;
};
console.log(`The Sum of a , b is : ${sumNormal(10,20)}`);

let sumArrow = (a , b) => (a + b);
console.log(`The Sum of a , b is : ${sumArrow(10,20)}`);

// Create an array with the length of each element of an array

let movies = ['Baahubali' , 'Dangal' , 'Drushyam'];
let movieLength = movies.map(function (movie) {
        return movie.length;
    }
);
console.log(movieLength);

// Arrow Function for the above example
let movieLengthArrow = movies.map((movie) => movie.length);
console.log(movieLengthArrow);


