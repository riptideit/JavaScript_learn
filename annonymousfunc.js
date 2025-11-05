// arrow functions: a concise way to write function expressions good for simple functions that only used once
// (parameter) => some code

// normally
const hello = function () {
  console.log("hello");
};

hello();

// arrow function

const hello2 = () => {
  console.log("hello");
};

hello2();

// another way
const hello3 = (name) => {
  console.log(`Hello ${name}`);
};

hello3("africa");

// another example
setTimeout(hello4, 3000);
function hello4() {
  console.log("hello");
}

setTimeout(function () {
  console.log(`Hello`);
}, 3000);
