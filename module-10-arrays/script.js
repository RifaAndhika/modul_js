//membuat array

//1.Mennggunakan array literal
let fruits = ["apple", "mango", "orange"];
console.log(fruits);

//2.Menggunakan new array
let numbers = new Array(1,2,3,4,5);
console.log(numbers);

//mengakses Elemen Array
console.log(fruits[1]);
console.log(numbers[3]);

//menambah atau mnegubah elemen array
fruits[1] = "watermelon";
fruits[3] = "melon";
console.log(fruits);



//manipulasi array
let num = [1,2,3];
//menambah elemen di akhir array
num.push(5); 
//menghapus elemen di akhir array
num.pop();
//menghapus elemen di awal array
num.shift();
//menambah elemen di awal array
num.unshift(10);
console.log(num);

//menggabungkan array/concat
let numbers2 = [6,7,8];
let newNumbers = num.concat(numbers2);
console.log(newNumbers);
//slice mengambil elemen array
console.log(newNumbers.slice(5));
//splice mengubah elemen array dan menghapus
newNumbers.splice(3, 2, 11);
console.log(newNumbers);
//indexOf menemukan elemen array di index yang mana
console.log(newNumbers.indexOf(11));
//mengecek apakah ada elemen tertentu di dalam array
console.log(newNumbers.includes(90));



//multidimendional array (array of array)
let matrix = [
    [1,2,3],
    [4,5,6],
    [7,8,9]
];
let result = 
console.log(matrix);
//mengambil elemen array
console.log(matrix[0][0]);