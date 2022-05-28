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


// Challenge 2
// class oop
class es6Car {
    constructor(make, speed){
        this.make = make;
        this.speed = speed;
    }

    get speedUS() {
        return this.speed / 1.6;
    }
    set speedUS(paramSpeed) {
        this.speed = paramSpeed * 1.6;
    }
}


const c2Car = new es6Car('Ford', 120);
console.log(`Car is ${c2Car.make}, speed is ${c2Car.speed} speedUS is ${c2Car.speedUS}`);
c2Car.speedUS = 80;
console.log(`New Car SpeedUS is set by 80 and km result is ${c2Car.speed}`);



// Challenge : 3
class eCar extends es6Car {
    constructor(make, speed, charge) {
        super(make, speed, charge);
        this.charge = charge;
    }

    set chargeTo(ct) {
        this.charge += ct;
    }
    
    Accelerate(acc) {
        this.speed += acc;
    }

    Breake(){
        this.speed = 0;
    }
}
const tesla = new eCar('Tesla', 120, 23);
console.log('tesla', tesla);
tesla.chargeTo = 47;
console.log('Tesla charged 47 more -> ', tesla.charge);
tesla.Accelerate(20);
console.log('Tesla accelerated by 20', tesla.speed);
tesla.Breake();
console.log('Tesla stopped', tesla.speed);


