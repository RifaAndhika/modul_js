//Function di javascript

/**
 syntax
 function namaFunction(parameter1, pameter2, ...){
    blok kode yang dijalankan
 }
 */

 function sapaPengguna(nama){
    console.log(`halo ${nama} selamat datang`);
 }

 function sapaSemua(){
    console.log('Halo semuanya');
 }

 //memanggil function
 sapaSemua();
 sapaPengguna(nama = "rifa andhika");


 //parameter dan argument. Parameter adakah variable yang didefinisikan di dalam deklarasi function
 //Argument adalah nilai  yang diberikan saat function dipanggil

 function tambah(a,b){
    console.log(a + b);
 }

 tambah(1,2);


 //Return Statement
 function kuadrat(num){
    return num * num;
 }

console.log(kuadrat(5));


function kali(c,d){
    return c * d;
}

let hasil = kali(4,3);
console.log(hasil);