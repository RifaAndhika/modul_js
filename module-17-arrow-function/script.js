//arrow function adalah cara singkat untuk membuat function expression, diperkenalkan di ES6

//contoh function expression
let kali = function(a,b){
    return a*b;
}
console.log(kali(4,5));

//contoh arrow function
let kurang = (a,b) => {
    return a - b;
}
console.log(kurang(10,5));

//conto arrow function jika hanya ada satu pernyataan, kita bisa menghilangkan function dan kurung kurawal jika hanya ada satu pernyataan
let tambah = (a,b) => a + b;
console.log(tambah(10,5));