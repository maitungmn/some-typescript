// Array
let pets: string[] = ["cat", "dog", "pig"];
let pets2: Array<string> = ["lion", "dragon", "lizard"];

// Tuple
let basket: [string, number];
basket = ["basketball", 5];

// Enum
enum Size {
  Small = 1,
  Medium = 2,
  Large = 3
}
let sizeName: string = Size[2];
let sizeName2: number = Size.Small;

// Any
let whatever: any = "dasdas";
whatever = basket;

// Void (no return)
let sing = (): void => {
  console.log("lalalalal");
};

// Never (return nothing, never true)
let error = (): string => {
  throw Error("ooops");
};

// interface
interface RobotArmy {
  count: number;
  type: string;
  magic?: string;
}
// type same with interface
// type RobotArmy2 = {
//   count: number,
//   type: string,
//   magic: string,
// };

let fightRobotArmy = (robots: RobotArmy) => {
  console.log("FIGHT!");
};
fightRobotArmy({ count: 1, type: "dragon" });
let fightRobotArmy2 = (robots: {
  count: number;
  type: string;
  magic: string;
}) => {
  console.log("FIGHT!");
};

// Type Assertion
interface CatArmy {
  count: number;
  type: string;
  magic: string;
}

let dog = {} as CatArmy;
dog.count;

// Function
let fightRobotArmy3 = (robots: RobotArmy): void => {
  console.log("FIGHT!");
};

let fightRobotArmy4 = (robots: {
  count: number;
  type: string;
  magic: string;
}): number => {
  console.log("FIGHT!");
  return 5;
};

// Classes
class Animal {
  sing: string = "lalalala";
  constructor(sound: string) {
    this.sing = sound;
  }

  greet(): string {
    return `Hello ${this.sing}`;
  }
}

let lion = new Animal("RRaaaaaawr")
lion.sing

// Union
let confused: string | number = "hello"
