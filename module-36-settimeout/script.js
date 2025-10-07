//setTimeout
// console.log("Memproses pembayaran...");

// setTimeout(() => {
//     console.log("Pembayaran berhasil ✅");
// }, 2000);

// // console.log("Terima kasih sudah berbelanja di toko kami 🙏");


// //setInterval
// let progress = 0;
// const totalDuration = 100;

// const progressInterval = setInterval(() => {
//     progress += 10;
//     console.log(`Playing... ${progress}%`);

//     if (progress >= totalDuration) {
//         clearInterval(progressInterval);
//         console.log("Playback finished ✅");
//     }
// }, 100);


//gabungan setTimeout dan setInterval
console.log("start proses...");

setTimeout(() => {
    console.log("Mulai monitoring setiap 2 detik");

    const interval  = setInterval(() => {
        console.log("Monitoring..." , new Date().toLocaleDateString());
}, 100);

setTimeout(() => {
    clearInterval(interval);
    console.log("Monitoring dihentikan ✅");
}, 10000);


}, 10000 );

console.log("Proses dimulai...");
