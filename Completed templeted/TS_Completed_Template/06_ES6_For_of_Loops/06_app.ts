/*
---------------------------------------------------------------------------------
 4. for...of loop
---------------------------------------------------------------------------------
 Before this, we were using "for..in"

*/

// Usage of for...in loop from ES5
let output = '';
let languages:Array<string> = ['HTML','CSS','JavaScript','TypeScript','Bootstrap'];
for(let index in languages){
    let value = languages[index];
    output += `${value} , `;
}
console.log(output);

// Usage of for...of loop from ES6
output = '';
for(let value of languages){
    output += `${value} , `;
}
console.log(output);

// for Each Loop ES5
output = '';
languages.forEach(function (element) {
    output += `${element} , `;
});
console.log(output);



