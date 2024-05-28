// // Code goes here!

// const names: Array<string> = []; // similar to string[]

// names[0].split(" ");

// const promise: Promise<string> = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("This is done");
//   }, 2000);
// });

// promise.then((data) => {
//   data.split("");
// });

// function merge<T extends object | string | number>(objA: T, objB: T) {
//   return Object.assign(objA, objB);
// }

// const mergedObject = merge({ name: "Jaidev", lastName: "Bangar" }, { age: 40 });

// interface Lengthy {
//   length: number;
// }

// function countAndDescribe<T extends Lengthy>(element: T) {
//   let descriptionText = "Got no value";
//   if (element.length > 0) {
//     descriptionText = "Got " + element.length + " elements";
//     return [element, descriptionText];
//   }
// }

// console.log(countAndDescribe("Hi There"));

// Keyof
// function extractAndConvert<T extends object, U extends keyof T>(
//   obj: T,
//   key: U
// ) {
//   return "Value: " + obj[key];
// }

// extractAndConvert({ name: "Jaidev" }, "name");

class DataStorage<T> {
  private data: T[] = [];
  addItem(item: T) {
    this.data.push(item);
  }

  removeItem(item: T) {
    if (this.data.indexOf(item) === -1) {
      return;
    }
    this.data.splice(this.data.indexOf(item), 1);
  }

  getItems() {
    return [...this.data];
  }
}

//Class Generics
// const textStorage = new DataStorage<string>();
// textStorage.addItem("Max");
// textStorage.addItem("Manu");

// textStorage.removeItem("Max");

// console.log(textStorage.getItems());

// const objStorage = new DataStorage<object>();

// const karanObj = { name: "karan" };

// objStorage.addItem(karanObj);
// objStorage.addItem({ name: "Rahul" });

// objStorage.removeItem(karanObj);
// console.log(objStorage);
