//if else statment di javascript

//if-else statment

let age = 12;
if(age >= 18){
     console.log('you are eligible to vote');
}else{
    console.log('you are not eligible to vote');
}


//if-else if 

let score = 25;
if(score >= 90){
    console.log('A')
}else if(score >= 80){
    console.log('B')
}else if(score >= 70){
    console.log('C')
}else{
    console.log('D')
}

//nested if-else (if-else bertingkat)
let num = -7;

if(num > 0){
    if(num % 2 === 0 ){
        console.log('positive dan genap');
    }else{
        console.log('positive dan ganjil')
    }
} else if(num < 0){
    if(num % 2 === 0){
        console.log('negatice dan genap');
    }else{
        console.log('negatif dan ganjil');
    }
}else{
    console.log('sama dengan 0');
}