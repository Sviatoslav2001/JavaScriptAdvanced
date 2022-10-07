function CoffeeMake() {

}
CoffeeMake.prototype.on = function () {
    console.log('On');
}
CoffeeMake.prototype.off = function () {
    console.log('Off');
}
function DripCoffee() {
    CoffeeMake.call();
}
function CornCoffee() {
    CoffeeMake.call();
}
function CoffeeMachine() {
    CoffeeMake.call();
}

DripCoffee.prototype.cappucino = function () {
    console.log('M-m-m, nice!');
}
CornCoffee.prototype.latte = function () {
    console.log('Not bad!');
}
CoffeeMachine.prototype.americano = function () {
    console.log('Great!');
}

const corn = new CornCoffee();
const drip = new DripCoffee();
const machine = new CoffeeMachine();

console.log(corn);
console.log(drip);
console.log(machine);