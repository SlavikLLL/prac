class Animal{
    constructor(name,speed){
        this.name = name;
        this.speed = speed;
        

    }
    showStats(){
        console.log(`Cкорость = ${this.speed}`);
        console.log(`Имя = ${this.name}`);
    }
    speedLow(){
        this.speed = 0;
        console.log("Стоит на месте");
    }
}

let animal = new Animal("Еж",5);
animal.showStats();
class Rabbit extends Animal{
    hide(){
        console.log("А щас прячется")

}
stop(){
    super.speedLow();
    
    this.hide()
    console.log(this.speed);
}

}
let rabbit = new Rabbit("Попугай",100);
console.log(rabbit);
rabbit.hide();
rabbit.showStats();
rabbit.stop();


