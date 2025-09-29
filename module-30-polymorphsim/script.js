//polymorphism adalah kemampuan objek untuk berubah bentuk atau tampilan sesuai dengan kondisi atau situasi yang berbeda

class Hewan{
    constructor(name){
        this.name =  name;

    }
        suara(){
            console.log('suara hewan');

    }
}

class Kucing extends Hewan{

    suara(){
        console.log(` meow`);
    }
}
class Anjing extends Hewan{

    suara(){
        console.log(` woof`);
    }
}


const kucing = new Kucing();
kucing.suara();

const anjing = new Anjing();
anjing.suara();