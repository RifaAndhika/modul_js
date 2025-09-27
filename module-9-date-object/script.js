//date object di javascript untuk memanipulasi tanggal

//Membuat date object

//tanggal dan waktu sekarang    
let now = new Date();
console.log(now);
console.log(now.getFullYear());
console.log(now.getMonth());
console.log(now.getDate());
console.log(now.getDay());
console.log(now.getHours());
console.log(now.getMinutes());
console.log(now.getSeconds());
console.log(now.getMilliseconds());
console.log(now.getTime());

// //menggunakan tanggal dan waktu tertentu atau string
let spesificDate = new Date("January 25, 2003 11:00:00");
console.log(spesificDate);

// //menggunakan parameter (tahun,bulan,hari,jam,menit,detik,mili detik)
let costumDate = new Date(2003, 8, 25, 11,20);
console.log(costumDate)

//Mengatur tahun  hari tanggal dan waktu
let date = new Date();
date.setFullYear(2025);
date.setMonth(8);
date.setDate(25);
date.setHours(11);
date.setMinutes(20);
date.setSeconds(0);
date.setMilliseconds(0);
console.log(date);


//perhitungan waktu dengan date object
let startDate  = new Date(2003, 8, 25, 11,12);
let endDate = new Date(2025, 7, 25, 11,53); 

let diff = endDate - startDate;
console.log(diff); //hasilnya dalam milidetik

let inDays = diff / (1000 * 3600 * 24);

let diffInDays = Math.floor(inDays);
console.log(diffInDays);