//tipe data primitif

//tipe data string
const  nama = 'rifa';
const domisili = "jakarta";
const negara = `${nama} indonesia`; //tanda petik satu berfungsi agar bisa menggunakan/mengakses variable di dalam string

//number
const umur = 20;

//boolean
const isMarried = true;

//undefined
let x; 

//null
const person = null;

//symbol
const symbol1 = Symbol('hello');

//bigInteger
const bigInt = 1000000000000000000000n;






//tipe data reference

//object
const orang = {
    nama: "rifa",
    umur: 20,
    domisili: "jakarta",
}

//array
const hobby = ["makan","tidur","bermain"];

//function
function sayHello(){
   let nama = "rifa";
   return `hello ${nama}`
}

const output = sayHello();

console.log(output, typeof output);



//perbedaan tipe data primitif dan reference

//tipe data primitif

let a = 10;
let b = a; // 'b' menyimpan nilai salinan dari 'a'. b = 20 bukan 120

a = 120;

console.log(b);


let obj1 = {
    nama: "rifa",
    umur: 20,
    domisili: "jakarta",
};

let obj2 = obj1; // 'obj2' menyimpan referensi obj1

obj1.nama = "carlos";

console.log(obj2);