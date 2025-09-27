//strings dalam javascript

//membuat strings
const doubleQuote = "Rifa"; //kutif 2
const singleQuote = 'Jakarta'; //kutif 1
const backtick = `Indonesia`; // tanda petik

//mengakses karakter di dalam strings, strings memiliki index yang dimulai dari 0

let str = "    Rifa Andhika    ";

console.log(str[0]); //ouput = R

//property dan methode strings

//mengetahui panjang strings
console.log(str.length); //output = 4

//mengubah strings menjadi upercase/huruf besar
console.log(str.toUpperCase()); //output = RIFA

//merubah strings menjadi lowercase/huruf kecil
console.log(str.toLowerCase()); //output = rifa


//menghilangkan spasi di awal dan akhir strings
console.log(str.trim()); //output = Rifa Andhika




//Manipulasi string

//Concat
let firstName = "udin";
let lastName = "ngakngak";

let fullName =  firstName + " " + lastName;

//template literals
let backTick = `${firstName} ${lastName}`;

console.log(fullName); //output = udin ngakngak
console.log(backTick); //output = udin ngakngak



//Mengambil bagian dari string
 let text = "RifaAndhika";
 console.log(text.slice(0,4)); //output = Rifa
 console.log(text.substring(4)); //output = Andhika

 //Mengganti bagian dari string
 let text2 = "RifaAndhika";
 let newReplace = text2.replace('Andhika', 'S.kom');
console.log(newReplace);

//menggabungankan array
const arr = ['Rifa', 'Andhika'];
console.log(arr.join(' '));

//mengubah string menjadi array
const arr2 = 'udin ngak ngak';
console.log(arr2.split(' '));
console.log(arr2.split(' ', 2));


//Pencarian didalam string

//indexoOf, memeriksa apakah ada string tertentu di dalam string
let sentence = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati minima inventore animi. Praesentium velit voluptatibus atque, eos illo excepturi perspiciatis dolor hic eum sequi exercitationem esse voluptate architecto blanditiis porro ipsum!";

let index = sentence.indexOf("dolor");
console.log(index);

//mencari index terakhir
let lastIndex = sentence.lastIndexOf("dolor");
console.log(lastIndex);

//mencari apakah string tertentu ada di dalam string jika ada true jika tidak ada false
let exsist = sentence.includes("ujang");
console.log(exsist);

//capilitaze challenge

const stringAsli = 'javascript';

const stringBaru = stringAsli[0].toUpperCase() + stringAsli.slice(1);
console.log(stringBaru);