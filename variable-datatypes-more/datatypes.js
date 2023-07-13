// Primity Data Types
// String, Number, Boolean, Null, Undefined, Symbol, BigInt

let firstNameNew = "zain";
console.log(typeof firstName);

const valueUndefined = undefined;
console.log(typeof valueUndefined);

const valueNull = null;
console.log(typeof valueNull);

let valueBoolean = true;
console.log(typeof valueBoolean);

let valueSymbol = Symbol("id");
console.log(typeof valueSymbol);

let valueBigint = 18956432154451n;
console.log(typeof valueBigint);

// Reference Types (Objects)
// Object literals, arrays & funcstions

let valueObject = {
  email: "zain.sync@gmail.com",
};

console.log(typeof valueObject);

let valueArrays = [1, 2, 3, 4, 5];
console.log(typeof valueArrays);

function alerting() {
  alert("hello");
}
console.log(typeof alerting());
