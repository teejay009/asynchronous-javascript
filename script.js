// ASYNCHRONOUS JAVASCRIPT
//INTERVAL and TIMERS ()
//setInterval()
//setTimeout()
//setInterval :it takes two argument, call back founction
// and number of milisecond. it allow  to execute a chunk
// of code, every time a specified amount of mili seconds perces


// EXAMPLE setInterval

// setInterval(() => {
//     console.log('Hello world');
// }, 1000);

//// example setInterval

const myInterval = setInterval(() => {
    console.log('Hello world');
}, 2000);

clearInterval(myInterval);


//setTimeout founction: It allow us to wait a certain amount 
// of time, before executing a chunk of code.

setTimeout(() => {
    console.log('Welcome to DLT Africa');
}, 5000);

setTimeout(() => {
    console.log('At the Top');
}, 7000);
console.log('At the Bottom');



//inheritance

class Animal {
    alive = true;
    eat() {
        console.log(`This ${this.name} can eat`);
    }

    sleep() {
        console.log(`This ${this.name} can sleep`);
    }

}

class Rabbit extends Animal {
    name = "rabbit"

    run() {
        console.log(`This ${this.name} can run`);
    }
}

class Fish extends Animal {
    name = "fish"

    swim() {
        console.log(`This ${this.name} can swim`);
    }

}

class Cow extends Animal {
    name = "cow"

    moa() {
        console.log(`This ${this.name} can moa`);
    }
}

const rabbit = new Rabbit()
const fish = new Fish()
const cow = new Cow()
console.log(rabbit.alive);
console.log(fish.alive);
console.log(cow.alive);

rabbit.eat()
rabbit.sleep()
rabbit.run()
fish.swim()
cow.moa()

class Car {
    constructor(power) {
        this._gas = 25
        this._power = power
    }
    get power() {
        return `${this._power}hp`
    }

    get gas() {
        return `${this._gas}L (${this._gas / 50 * 100} %)`

    }
    set gas(value) {

        if (value > 50) {
            value = 50
        } else if (value < 0) {
            value = 0
        }

        this._gas = value
    }
}
let car1 = new Car(400)
console.log(car1);

let car = new Car(400)
car.gas = 500
console.log(car.power);
console.log(car.gas);


//ERROR OBJECT

// try {
//     console.log();
// }

//  cash(error) {
//     console.log(error);
//}

try {
    let x = window.prompt('Enter a #')
    x = Number(x)

    if (isNaN(x)) throw "That wasn't a number"

    if(x == "")throw "kindly imput valid number"

    console.log(`${x} is a number`);
} catch (err) {
    console.log(err);
}

finally {
    console.log('congratulation🤷‍♂️ 44');
}

// DATE

let date = new Date();

let year = date.getFullYear()
console.log(year);
let month = date.getMonth()
console.log(month);
let day = date.getDay()
console.log(day);
let hours = date.getHours()
console.log(hours);

const myLabel = document.getElementById("myLabel")
myLabel.innerText = formatTime(date)

function formatDate(date){
    let hours = date.getHours()
    let month = date.getMonth()
    let dayOfTheWeek = date.getDay()
    return `${hours}/${month}/${dayOfTheWeek}`
}

function formatTime(date){
    let hours = date.getHours()
    let minute = date.getMinutes()
    let seconds = date.getSeconds()
    let amOrpm = hours >= 12? "pm":"am"

    return `${hours}:${minute}:${seconds} ${amOrpm}`
}