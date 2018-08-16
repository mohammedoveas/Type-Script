/*
-----------------------------------------------------------------------------------------
   Variable Declarations in TypeScript and Usage
-----------------------------------------------------------------------------------------
 */
/*

    Boolean DataType

The most basic data type is the simple true/false value,
which JavaScript and TypeScript call a boolean value.

*/
/*

    Number DataType

    As in JavaScript all the numbers in TypeScript are also Floating point numbers.
    In addition to hexadecimal and decimal literals, TypeScript also
    supports binary and octal literals introduced in ECMAScript 2015.
    decimal, hex = 0x , binary = 0b , octal = 0o.
*/
/*
String Data type

 This is one of the commonly used datatype for textual data of any length,
 we may use with "" or ''
 */
// You can also use template strings, which can span multiple lines and have embedded expressions.
/*
    Array DataType

    An array is an indexed collection of values
    we can define multiple values with single variable name array
    we can use them like number[] or Array<number>
 */
/*

  Enum DataType

   enums are used to define a collection of constant values
    enums values once declared ,  they cannot be modified
 */
/*
    Any DataType

    This datatype accepts any types of data as a value to variables
 */
/*
    Void Data Type
    This is quite opposite to any datatype
    this may commonly used with function where no return types
 */
// Boolean , Number , String , Any , Array , Enum , void
// Boolean
var isTSEasy = true;
console.log("isTSEasy : " + isTSEasy); // true
// String
var tsAuthor = 'Microsoft';
console.log("TS Author : " + tsAuthor); // Microsoft
// Number
var tsVersion = 3.0;
console.log("TS Version : " + tsVersion); // 3.0
// Any
var test = 10;
console.log("test : " + test);
test = true;
console.log("test : " + test);
// Array
var languages = ['HTML', 'CSS', 'JavaScript', 'Bootstrap'];
console.log("languages : " + languages);
// Enum
var Month;
(function (Month) {
    Month["JAN"] = "JANUARY";
    Month["FEB"] = "FEBRUARY";
})(Month || (Month = {}));
console.log("JAN : " + Month.JAN); // JANUARY
// Month.JAN = 'January'; cannot re-assign becoz its 'enum'
// void -> No Return from the function
function greet(name) {
    console.log("Good Morning " + name);
}
greet('John');
