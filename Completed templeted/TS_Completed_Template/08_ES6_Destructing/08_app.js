/*
---------------------------------------------------------------------------------
 6. Destructing
---------------------------------------------------------------------------------
This is one of the powerful feature in ES6, where in instead of adding a single value
to a variable from an array, we can do it all by once.

*/
// Usage of Destructing to assign each variable of an array to other vars
var student = ['Rajan', 20, 'Engineering'];
/*
let sName = student[0];
let sAge = student[1];
let sCourse = student[2];
*/
var sName = student[0], sAge = student[1], sCourse = student[2];
console.log("Name : " + sName + " Age : " + sAge + " Course : " + sCourse);
// Usage of Destructing to exchange the values of two vars
var a = 10;
var b = 20;
_a = [b, a], a = _a[0], b = _a[1];
console.log("a : " + a + " b: " + b);
// Usage of Destructing to assign each variable of an Object to other vars
var phone = {
    mfg: 'Samsung',
    ram: '4GB',
    display: '5Inch'
};
/*
let phone_mfg = phone.mfg;
let phone_ram = phone.ram;
let phone_display = phone.display;
console.log(`MFG : ${phone_mfg} RAM : ${phone_ram} Display : ${phone_display}`);
*/
var phone_mfg = phone.mfg, phone_ram = phone.ram, phone_display = phone.display;
console.log("MFG : " + phone_mfg + " RAM : " + phone_ram + " Display : " + phone_display);
var _a;
