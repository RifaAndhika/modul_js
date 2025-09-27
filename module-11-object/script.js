//membuat object di javascript

//1.obeject literal
let car = {
    merk: "honda",
    name: "toyota",
    year: 2024,
    color: "merah"
}
console.log(car["color"]);
console.log(car);

//2.object constructor
let book = new Object();
book.title = "belajar javascript";
book.maker = "Rifa Andhika";
book.color = "merah";
book.pages = 200;

console.log(book["title"]);
console.log(book);



let mahasiswa = {
    "nama lengkap" : 'rifa andhika',
    nim: "123456",
    umur: 20,
}

//mengakses properti pada object

//mengunakan notasi titik (dot notation)
console.log(mahasiswa.nim);

//menggunakan braket notation lebih efektif karena bisa menggunakan key string yang mengandung spasi
console.log(mahasiswa["nama lengkap"]);

//menambah properti pada object
mahasiswa["alamat"] = "jakarta";
mahasiswa["tahun lahir"] = "2003";

//megubah nama dari value properti
mahasiswa["nama lengkap"] = "Rifa Andhika S.kom";
 
//menghapus properti
delete mahasiswa["tahun lahir"];
console.log(mahasiswa);




//nested object
let universitas = {
    
    "nama universitas" : "ITB",
    fakultas : {
        nama : "Fakultas Teknik",
        jurusan : "Teknik Informatika"
    }

}

console.log(universitas.fakultas["jurusan"]);


//Destructuring object mengambil properti dari object agar tidak perlu menggunakan notasi titik atau braket
let { "nama lengkap": nama, nim, umur } = mahasiswa;
console.log(nama);