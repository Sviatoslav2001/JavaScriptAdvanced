class Worker {  // Exs1
    constructor(firstName, secondName, rate, days) {
        this.firstName = firstName;
        this.secondName = secondName;
        this.rate = rate;
        this.days = days;
    }
    getSalary(rate, days) {
        let salary = rate * days;
        return salary
    }
}

const worker = new Worker('Ivan', 'Ivanov', 10, 31);
const work1 = new Worker('Petro', 'Petrov', 25, 10)

console.log(worker.firstName);
console.log(worker.secondName);
console.log(worker.rate);
console.log(worker.days);
console.log(worker.getSalary(10, 31));

console.log(work1.firstName);
console.log(work1.secondName);
console.log(work1.rate);
console.log(work1.days);
console.log(work1.getSalary(25, 10));

//==============================================================

class MyString { // Exs 2
    constructor(string) { }

    reverse(string) {
        let splitString = string.split('');
        let reverseString = splitString.reverse();
        let joinArray = reverseString.join('')
        return joinArray;
    }
    ucFirst(string) {
        if (!string) return string;

        return string[0].toUpperCase() + string.slice(1);
    }
    ucWords(string) {
        return (string + '').replace(/^([a-z])|\s+([a-z])/g,
            function ($1) {
                return $1.toUpperCase();
            });
    }
}
const str = new MyString();

console.log(str.reverse('ivan'));
console.log(str.ucFirst('arsenal'));
console.log(str.ucWords('arsenal arsenal arsenal'));

//============================================================

class CoffeMake{
    constructor() {}
    on() {}
    off() {}
};

class DripCoffee extends CoffeMake{
    constructor() {
        super()
    }
    cappucino(){}
}

class HornCoffee extends CoffeMake{
    constructor() {
        super()
    }
    latte(){}
}

class CoffeeMachine extends CoffeMake{
    constructor() {
        super()
    }
    americano(){}
}

const horn = new HornCoffee();
const drip = new DripCoffee();
const machine = new CoffeeMachine();

console.log(horn);
console.log(drip);
console.log(machine);

