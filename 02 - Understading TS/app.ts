// unknown type - Better than any type

// unknown cannot be assigned to different types, it checks the type

let userInput: unknown;
let userName: string;

userInput = 5;
userInput = "Jaidev";

// checking if userInput is of type string, then only assign to userName which is strict string type
if (typeof userInput === "string") {
  userName = userInput;
}
