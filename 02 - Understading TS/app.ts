// This function returns number type of value
function add(n1: number, n2: number): number {
  return n1 + n2;
}

// returns no value hence return type is void
function printResult(num: number): void {
  console.log("Result : " + num);
}

printResult(add(5, 12));

// here we are defining type of the combineValues and we are making it like
// combineValues is of function type which accepts two parameters and returns number
let combineValues: (a: number, b: number) => number;

combineValues = add;

console.log(combineValues(8, 8));
