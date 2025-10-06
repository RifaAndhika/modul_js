console.log('start');

setTimeout(() => {
    console.log('this is from setTimeout asynchronous code');
}, 5000);

console.log('end'); //ouput end langsung dijalankan tanpa diblok atau menunggu setTimeout selesai
