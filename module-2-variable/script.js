// var, dia bisa diakses diluar maupun didalam scopes, dan nilainya bisa diubah


// if(true){
//     var nama = "John Doe";
    
// } //ini sscope

// nama = "carlos";
// console.log('var :'   ,nama);




 // let, dia tidak bisa diakses diluar scopes hanya didalam scope dan nilainya  bisa diubah

// if(true){
//     let nama = "John Doe";
//     nama = "carlos";
//     console.log('let :'   ,nama);
    
// } //ini sscope



 // conts, dia tidak bisa diakses diluar scopes hanya didalam scope dan nilainya tidak bisa diubah

if(true){
    const nama = "John Doe";
    // nama = "carlos"; ini tidak bisa
    console.log('let :'   ,nama);
    
} //ini sscope