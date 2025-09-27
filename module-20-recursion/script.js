//recursion function
//function yang memanggil dirinya sendiri
//function yang memanggil dirinya sendiri harus memiliki kondisi berhenti yang disebut base case dan harus memiliki perubahan yang disebut recursive case

function faktorial(n){
    //base case
    if (n === 0){
        return 1;
    }
    
    //case recursive
    
    console.log(n);
    return n * faktorial(n - 1);
}

console.log(faktorial(5));


//contoh pangkat

function pangkat(base,exsponent){
    return base ** exsponent;

}

let hasil = pangkat(2,3);
console.log(hasil);
