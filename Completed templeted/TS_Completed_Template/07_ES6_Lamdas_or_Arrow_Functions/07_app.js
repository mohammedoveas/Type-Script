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
var greetNormal = function () {
    return "Good Morning";
};
console.log(greetNormal());
var greetArrow = function () { return "Good Morning"; };
console.log(greetArrow());
// Normal Function 2
var greetMeNormal = function (name) {
    return "Good Morning " + name;
};
console.log(greetMeNormal('John'));
var greetMeArrow = function (name) { return "Good Morning " + name; };
console.log(greetMeArrow('Williams'));
// Normal Function 3
var sumNormal = function (a, b) {
    return a + b;
};
console.log("The Sum of a , b is : " + sumNormal(10, 20));
var sumArrow = function (a, b) { return (a + b); };
console.log("The Sum of a , b is : " + sumArrow(10, 20));
// Create an array with the length of each element of an array
var movies = ['Baahubali', 'Dangal', 'Drushyam'];
var movieLength = movies.map(function (movie) {
    return movie.length;
});
console.log(movieLength);
// Arrow Function for the above example
var movieLengthArrow = movies.map(function (movie) { return movie.length; });
console.log(movieLengthArrow);
