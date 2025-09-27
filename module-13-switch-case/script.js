//Switch Case di javascript

// syntax switch case
// switch (expresi)
//     case nilai1 : 
//             //kode akan dijalankan jika expresi === nilai1
//             break;
//     case nilai2 : 
//             //kode akan dijalankan jika expresi === nilai2
//             break;
//     //tambah lebih banyak case sesuai kebutuhan
//     default :
//             //kode akan dijalankan jika tidak ada case yang cocok

    
const hari = 3;
let namaHari;

switch (hari) {
    case 1:
        namaHari = "Senin";
        break;
    case 2:
        namaHari = "Selasa";
        break;
    case 3:
        namaHari ="Rabu";
        break;
    case 4:
        namaHari = "Kamis";
        break;
    case 5:
        namaHari = "Jumat";
        break;
    case 6:
        namaHari = "Sabtu";
        break;
    case 7:
        namaHari = "Minggu";
        break;
    default:
        namaHari = "Hari tidak dikenali";
        break;

}

console.log(namaHari);


////Switch case dengan ekspresi atau operasi
let nilai = 22;
switch (true){
    case nilai >= 90:
        console.log('grade A');
        break;
    case nilai >= 80:
        console.log('grade B');
        break;
    case nilai >= 70:
        console.log('grade C');
        break;
    case nilai >= 60:
        console.log('grade D');
        break;
    default:
        console.log('grade E');
        break;
}


//tugas

let bulan = 10;

switch (true){
    case bulan === 1:
        console.log('Januari');
        break;
    case bulan === 2:
        console.log('Februari');
        break;
    case bulan === 3:
        console.log('Maret');
        break;
    case bulan === 4:
        console.log('April');
        break;
    case bulan === 5:
        console.log('Mei');
        break;
    case bulan === 6:
        console.log('Juni');
        break;
    case bulan === 7:
        console.log('Juli');
        break;
    case bulan === 8:
        console.log('Agustus');
        break;
    case bulan === 9:
        console.log('September');
        break;
    case bulan === 10:
        console.log('Oktober');
        break;
    case bulan === 11:
        console.log('November');
        break;
    case bulan === 12:
        console.log('Desember');
        break;
    default:
        console.log('Bulan tidak dikenali');
        break;
}