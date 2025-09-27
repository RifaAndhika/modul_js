//implicit type conversion

let result = 10 + "20"; //result = "1020" akan dianggap sebagai string
    result = 10 - "20"; //result = -10 akan dianggap sebagai number
    result = 10 * "20"; //result = 200 akan dianggap sebagai number
    result = 10 / "20"; //result = 0.5 akan dianggap sebagai number

//falsy value 0, null, undefined, "", NaN
let bool = !1;


//explisit type conversion

let number = 100;

//mengubah dari number ke string
let string = number.toString();
let string1 = String(number);

//mengubah dari string ke number
let string2 = "100.90";
let number2 = Number(string2);
let number3 = parseInt(string2);
let number4 = parseFloat(string2);

let bool2 = Boolean(1);

console.log(bool2, typeof bool2);
