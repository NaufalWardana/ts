"use strict";
// Soal 1
Object.defineProperty(exports, "__esModule", { value: true });
function getFullName(person) {
    return "".concat(person.firstName, " ").concat(person.lastName);
}
var person = { firstName: "John", lastName: "Doe" };
console.log(getFullName(person));
// Soal 2
function wrapInArray(item) {
    return [item];
}
console.log(wrapInArray(123));
console.log(wrapInArray("Hello"));
console.log(wrapInArray({ name: "Alice" }));
