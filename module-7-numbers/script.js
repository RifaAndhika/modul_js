//number

//contoh yang termasuk kedalam number dalam javascript
const bilanganBulat = 10; //integer
const bilanganPecahan = 10.5; //float
const bilanganNegatif = -10;
const billanganHex = 0x10; //hexadecimal
const bilanganBinary = 0b10; //binary
const bilanganInfinity= Infinity;

// console.log(bilanganPecahan, typeof bilanganPecahan);
// console.log(bilanganNegatif, typeof bilanganNegatif);
// console.log(billanganHex, typeof billanganHex);
// console.log(bilanganBinary, typeof bilanganBinary);
// console.log(bilanganInfinity, typeof bilanganInfinity);


//property pada object number
 
// 1.number.MAX_VALUE
console.log(Number.MAX_VALUE);

// 2.number.MIN_VALUE
console.log(Number.MIN_VALUE);

// 3.number.NEGATIVE_INFINITY
console.log(Number.NEGATIVE_INFINITY);

// 4.number.POSITIVE_INFINITY
console.log(Number.POSITIVE_INFINITY);

// 5.number.NaN
console.log("abs" * 10);


//Metode Bawaan Pada Number

//1.toString(), mengubah angka menjadi string
let num = 937.8;
 let str = num.toString();
 console.log(str, typeof str);

//2.toFixed(digits), mengubah angka menjadi string dengan jumlah digit desimal yang ditentukan.
let float = 93.824232;
let fixed = float.toFixed(2);
console.log(fixed, typeof fixed);

//3.toPrecision(digits), Mengubah angka menjadi string dengan panjang total yang ditentukan.
let float1 = 96.432;
console.log(float1.toPrecision(3    ), typeof float1.toPrecision(2));


//parseInt() dan farseFloat(), Mengubah string menjadi angka integer atau floating point.
let str1 = "231.21";
let num1 = parseInt(str1);
console.log(num1, typeof num1);
 
let num2 = parseFloat(str1);
console.log(num2, typeof num2);