// const Car = function(make, speed) {
//     this.make = make;
//     this.speed = speed;
// };

// Car.prototype.accelerate = function() {
//     this.speed += 10;
//     console.log(`${this.make} is going at ${this.speed} km/h`);
// };

// Car.prototype.brake = function() {
//     this.speed -= 5;
//     console.log(`${this.make} is going at ${this.speed} km/h`);
// };

// const bmw = new Car('BMW', 120);
// const mercedes = new Car('Mercedes', 95);

// bmw.accelerate();
// bmw.brake();
// mercedes.accelerate();
// mercedes.accelerate();
// mercedes.accelerate();


// Challenge 2
class Car {
    constructor(make, speed) {
        this.make = make;
        this.speed = speed;
    }

    accelerate() {
        this.speed += 10;
        console.log(`${this.make} is going at ${this.speed} kmh.`);
    }

    brake() {
        this.speed -= 5;
        console.log(`${this.make} is going at ${this.speed} kmh.`);
    }

    get speedUS() {
        return (this.speed / 1.6);
    }

    set speedUS(kmh) {
        this.speed = (kmh * 1.6);
    }
};

// const ford = new Car('Ford', 120);
// console.log(ford.speedUS);
// ford.accelerate();
// ford.accelerate();

// ford.speedUS = 50;
// console.log(ford);


// Challenge 3
// const EV = function(make, speed, charge) {
//     Car.call(this, make, speed);
//     this.charge = charge;
// };

//     chargeBattery(chargeTo) {
//         this.charge = chargeTo;
//     }

//     accelerate() {
//         this.speed +=20;
//         this.charge--;
//         console.log(`${this.make} is going at ${this.speed} km/h, with a charge of ${this.charge}%`);

// EV.prototype = Object.create(Car.prototype);

// EV.prototype.chargeBattery = function(chargeTo) {
//     this.charge = chargeTo;
// };

// EV.prototype.accelerate = function() {
//     this.speed += 20;
//     this.charge--;
// };

// const tesla = new EV('Tesla', 120, 23);

// tesla.chargeBattery(90);
// tesla.accelerate();
// tesla.accelerate();
// tesla.accelerate();
// tesla.brake();
// console.log(tesla);

// Polymorphism is taking the parent object and editing its properties
// Child class can override a method from a parent class if it has the same method name bc protoype chain uses the 1st one found


// Challenge 4
class EVCl extends Car {
    #charge;

    constructor(make, speed, charge) {
        super(make, speed);
        this.#charge = charge;
    }

    accelerate() {
        this.speed +=20;
        this.#charge--;
        console.log(`${this.make} is going at ${this.speed} km/h, with a charge of ${this.#charge}%`);
        return this;
    }

    chargeBattery(chargeTo) {
        this.#charge = chargeTo;
        return this;
    }

    brake () {
        this.speed -= 5;
        console.log(`${this.make} is going at ${this.speed} km/h`);
        return this;
    }
};

const rivian = new EVCl('Rivian', 120, 23);
rivian
    .accelerate()
    .accelerate()
    .accelerate()
    .brake()
    .chargeBattery(50)
    .accelerate();

console.log(rivian.speedUS);