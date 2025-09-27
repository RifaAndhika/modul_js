// //cara membuat object
let motor =  {
    merk: "honda",
    color: "merah",
    year: 2023,
    start : function(){
        console.log(`${this.merk} berjalan`);
    },

    info : function(){
        console.log(`merk: ${this.merk}, color: ${this.color}, year: ${this.year}`);
    }
}

// console.log(motor.merk);
// console.log(motor);
// motor.start();
// motor.info();




//membuat object dengan function constructor atau blueprint
function mobil(merk,color,year){
    this.merk = merk;
    this.color = color;
    this.year = year;

    this.start = function(){
        console.log(`${this.merk} berjalan`);
    }

    this.info = function() {
        console.log(`merk: ${this.merk}, color: ${this.color}, year: ${this.year}`);
    }
 
}

// let car = new mobil('honda','merah',2023);
// console.log(car);
// car.start();
// car.color = 'hitam';
// car.info();
// let car1 = new mobil('toyota','hitam',2022);
// console.log(car);
// console.log(car1);

// car.start();
// car1.info();


//menggunakan class atau versi baru

class Mobil{
    constructor(merk,color,year){
        this.merk = merk;
        this.color = color;
        this.year = year;
    }
    start(){
        console.log(`${this.merk} berjalan`);
    }

    info(){
        console.log(`merk: ${this.merk}, color: ${this.color}, year: ${this.year}`);``
    }
}


//prototype adalah object dapat mewarisi property dan method dari object lain
Mobil.prototype.made =  function(){
    console.log(`${this.merk} dibuat di tahun ${this.year}`);
}

let car =  new Mobil('honda','merah',2023);
car.made();

car.start();
car.info();
