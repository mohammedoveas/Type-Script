/*
---------------------------------------------------------------------------------
 6. Destructing
---------------------------------------------------------------------------------
This is one of the powerful feature in ES6, where in instead of adding a single value
to a variable from an array, we can do it all by once.

*/

// Usage of Destructing to assign each variable of an array to other vars
let student  = ['Rajan',20,'Engineering'];

/*
let sName = student[0];
let sAge = student[1];
let sCourse = student[2];
*/

let [sName , sAge , sCourse]  = student;
console.log(`Name : ${sName} Age : ${sAge} Course : ${sCourse}`);

// Usage of Destructing to exchange the values of two vars
let a = 10;
let b = 20;
[a , b] = [b , a];
 console.log(`a : ${a} b: ${b}`);

// Usage of Destructing to assign each variable of an Object to other vars

let phone = {
    mfg : 'Samsung',
    ram : '4GB',
    display : '5Inch'
};

/*
let phone_mfg = phone.mfg;
let phone_ram = phone.ram;
let phone_display = phone.display;
console.log(`MFG : ${phone_mfg} RAM : ${phone_ram} Display : ${phone_display}`);
*/

let { mfg:phone_mfg ,
      ram : phone_ram ,
      display:phone_display
    } = phone;
console.log(`MFG : ${phone_mfg} RAM : ${phone_ram} Display : ${phone_display}`);


