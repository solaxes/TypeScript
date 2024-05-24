// Literal Types in conjuction with Union Types
function combine(
  input1: number | string,
  input2: number | string,
  resultConversion: "as-number" | "as-text" // Literals
) {
  let result;
  if (
    (typeof input1 === "number" && typeof input2 === "number") ||
    resultConversion === "as-number"
  ) {
    result = +input1 + +input2;
  } else {
    result = input1.toString() + " " + input2.toString();
  }

  return result;
}

const combineAges = combine(30, 20, "as-number");
console.log(combineAges);

const combineStringAges = combine("30", "30", "as-number");
console.log(combineStringAges);

const combineNames = combine("Jaidev", "Bangar", "as-text");
console.log(combineNames);
