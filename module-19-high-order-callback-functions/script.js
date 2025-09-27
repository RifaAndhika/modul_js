// //HIGH ORDER FUNCTIONS
// //CALLBACK FUNCTIONS

// //high order function adalah function yang menerima function lain sebagai argument atau mengembalikan function function lain sebagai hasil.

// //callback function adalah function yang dipanggil oleh function lain atau function yang dikirim  sebgai argument ke function lain dan dipanggil di dalam function tersebut



// // ini adalah high order function
// function selesaikanTugas(tugas, callback){
//     console.log(`Selesaikan tugas: ${tugas}`);
//     callback();
// }


// //ini adalah callback function
// function tugasBelumSelesai(){
//     console.log('tugas belum selesai');
// }
// function tugasSelesai(){
//     console.log('tugas selesai');
// }


// selesaikanTugas("belajar javascript",tugasBelumSelesai, tugasSelesai);

// //==================================================================

// //menggunakan callback function dengan object
// function tugasKampus(tugas, callbacks){
//     console.log(`Mengerjakan tugas: ${tugas}`);
//     if (callbacks.onStart) callbacks.onStart();
//     if (callbacks.onFinish) callbacks.onFinish();
// }

// tugasKampus("Belajar JS", {
//   onStart: () => console.log("Mulai belajar..."),
//   onFinish: () => console.log("Selesai belajar"),
// });



function cleanHouse(clean, callbacks){
    console.log(`bersihkan rumah: ${clean}`);
    if(callbacks.onClean) callbacks.onClean();
    if(callbacks.onFinish) callbacks.onFinish();
}

cleanHouse("Segera dibersihkan", {
    onClean: () => console.log("Rumah sudah dibersihkan"),
    onFinish: () => console.log("Rumah sudah selesai dibersihkan")
})

