// An interface can be used as a contract a class can implement and a class then has to adhere to.
// interface Person {
//   name: string;
//   age: number;

//   greet(phrase: string): void;
// }

// let user1: Person;

// user1 = {
//   name: "Jaidev",
//   age: 30,
//   greet(phrase: string) {
//     console.log(phrase + " " + this.name);
//   },
// };

// user1.greet("Hi there, I am ");

// Now where we apply this interface that class of variable will become greetable
// interface Greetable {
//   name: string;
//   greet(phrase: string): void;
// }

// class Person implements Greetable {
//   name: string;

//   constructor(n: string) {
//     this.name = n;
//   }

//   greet(phrase: string) {
//     console.log(phrase + "  " + this.name);
//   }
// }

// let user1 = new Person("Jaidev");

// user1.greet("I am ");

// Interface ad function type
// interface AddFn {
//   (a: number, b: number): number;
// }

// let add: AddFn;

// add = (n1: number, n2: number) => {
//   return n1 + n2;
// };

// console.log(add(10, 20));

// Option property

interface Named {
  name: string;
  output?: string; // Optional property
}

class Person implements Named {
  name: string;
  constructor(n: string) {
    this.name = n;
  }
}
