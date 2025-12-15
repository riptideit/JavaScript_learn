/**
 * function as Object property
 */

const obj = {
  name: "Prakash Sakari",
  greetingMessage: function () {
    console.log("hello from prakash");
  },
  bye() {
    console.log("Tata bye bye");
  },
};

console.log(obj);
obj.bye();
obj.greetingMessage();
