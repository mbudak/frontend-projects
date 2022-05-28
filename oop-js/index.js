// Challenge 1
// function OOP
function Car(make, speed) {
    this.make = make;
    this.speed = speed;

    this.Accelerate = (acc) => {
        this.speed += acc;        
    }
    this.Decelerate = (dec) => {
        this.speed -= dec;
    }
    this.Breake = () => {
        this.speed = 0;
    }
}

const Car1 = new Car('Dodge', 180);

console.log('Car 1 ->', Car1.make, Car1.speed);

Car1.Accelerate(10);
console.log('Car 1 Accelerated -> ', Car1.make, Car1.speed);

Car1.Decelerate(5);
console.log('Car 1 Decelerated', Car1.make, Car1.speed);


const bmw = new Car('BMW', 120);
const mercedes = new Car('Mercedes', 95);

console.log('car Bmw -> ', bmw.make, bmw.speed);
bmw.Accelerate(10);
console.log('car accelerated by 10 -> ', bmw.speed);
bmw.Breake();
console.log('car bmw stopped', bmw.speed);
console.log('car Mercedes -> ', mercedes.make, mercedes.speed);


// Challenge 1
// class oop
public class CarCl(make, speed){
    constructor(make, speed){
        this.make = make;
        this.speed = speed;
    }

}

