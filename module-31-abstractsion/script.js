//

class shape{
    constructor(name){
        if(this.constructor === shape){
            throw new Error("Abstract class cannot be instantiated");
        }
        this.name = name;
    }

    calculateArea(){
        throw new Error("Method calculateArea must be implemented");
    }
}

class triAngle extends shape{
    constructor(height, base){
        super("Triangle");
        this.height = height;
        this.base = base;
    }
    calculateArea(){
        return (this.height * this.base) / 2;
    }
}

let triangle = new triAngle(10, 20);
console.log(triangle.calculateArea());