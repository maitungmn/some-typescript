// Array
var pets = ["cat", "dog", "pig"];
var pets2 = ["lion", "dragon", "lizard"];
// Tuple
var basket;
basket = ["basketball", 5];
// Enum
var Size;
(function (Size) {
    Size[Size["Small"] = 1] = "Small";
    Size[Size["Medium"] = 2] = "Medium";
    Size[Size["Large"] = 3] = "Large";
})(Size || (Size = {}));
var sizeName = Size[2];
var sizeName2 = Size.Small;
// Any
var whatever = "dasdas";
whatever = basket;
// Void (no return)
var sing = function () {
    console.log("lalalalal");
};
// Never (return nothing, never true)
var error = function () {
    throw Error("ooops");
};
// type same with interface
// type RobotArmy2 = {
//   count: number,
//   type: string,
//   magic: string,
// };
var fightRobotArmy = function (robots) {
    console.log("FIGHT!");
};
fightRobotArmy({ count: 1, type: "dragon" });
var fightRobotArmy2 = function (robots) {
    console.log("FIGHT!");
};
var dog = {};
dog.count;
// Function
var fightRobotArmy3 = function (robots) {
    console.log("FIGHT!");
};
var fightRobotArmy4 = function (robots) {
    console.log("FIGHT!");
    return 5;
};
// Classes
var Animal = /** @class */ (function () {
    function Animal(sound) {
        this.sing = "lalalala";
        this.sing = sound;
    }
    Animal.prototype.greet = function () {
        return "Hello " + this.sing;
    };
    return Animal;
}());
var lion = new Animal("RRaaaaaawr");
lion.sing;
// Union
var confused = "hello";
