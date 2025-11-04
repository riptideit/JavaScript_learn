// function functionname(parameters){ //code execute }}

function greet(name) {
  console.log("Hello " + name + " !");
}

greet("Alice");

//function invocation
//types of function invocation

//1. Function invocation
// when a function is called directly using its name
function add(a, b) {
  return a + b;
}

console.log(add(2, 5));

//2. Method invocation
// when a function is a property of an (object) and is invoked as object.method(), it is called a method invocation
const user = {
  name1: "John",
  greet: function () {
    return `Hello, ${this.name1}!`; //we access this using "this" keyword
  },
};
console.log(user.greet());

//3. Constructor invocation
// functions can be invoked as constructor using the new keyword
function Person(name, age) {
  this.name = name;
  this.age = age;
}

const alex = new Person("Alex", 25);
console.log(alex.name);
console.log(alex.age);

//4. Indirect invocation
// functions can be invoked indirectly using call(), apply() or bind()
function greeet(greeting) {
  return `${greeting}, ${this.name}`;
}

const userr = { name: "Max" };
console.log(greeet.call(userr, "Hello"));

// apply() similar to call()
function greeet(greeting) {
  return `${greeting}, ${this.name}`;
}

const userr2 = { name: "Max" };
console.log(greeet.apply(userr2, ["Hello"]));
