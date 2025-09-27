//loop di javascript

//for loop

// for (initialization; kondisi; increment/decrement)
//kode akan dijalankan selama kondisi true
for (let i = 1; i <= 5; i++) {
    console.log(`iterasi for ke-${i}`);
    
}



//while loop
//syntax while (kondisi){
//  kode yang dijalankan selama kondisi true
//}
let y = 1;
while (y <=5){
    console.log(`iterasi while ke-${y}`);
    y++;
} 



//do while
//syntax  do{
//    kode yang dijalankan selama kondisi true
//} while (kondisi)
let x = 1;
do {
    console.log(`iterasi do while ke-${x}`);
    x++;
} while (x <= 5);





//for in loop 
const person = {
    name: "Rifa",
    age: 20,
    city: "Jakarta"
}

for (let key in person){
    console.log(key);
    console.log(person[key])
}



//for of loop

let num = 0;

const array = [1,19,3,4,5];
for (let value of array){
    num = num + value;
}

console.log (num);

//tugas

//looping dengan for melewatkan angka 5

for (let i = 1; i <= 10; i++){
    if (i === 5){
        continue;
    }
    console.log(`angka ke-${i}`);
}