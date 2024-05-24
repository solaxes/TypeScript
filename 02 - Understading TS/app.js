// This function returns number type of value
function add(n1, n2) {
    return n1 + n2;
}
// returns no value hence return type is void
function printResult(num) {
    console.log("Result : " + num);
}
printResult(add(5, 12));
var combinValues;
combinValues = add;
console.log(combinValues(8, 8));
