"use strict";
// unknown type - Better than any type
// unknown cannot be assigned to different types, it checks the type
let userInput;
let userName;
userInput = 5;
userInput = "Jaidev";
// checking if userInput is of type string, then only assign to userName which is strict string type
if (typeof userInput === "string") {
    userName = userInput;
}
// This function will never return any value even not undefined
function generateError(message, code) {
    throw { message: message, errorCode: code };
}
generateError("An error occurred", 500);
