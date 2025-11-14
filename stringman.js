/*
How to iterate over characters in string
1. using for loop
2. using for of loop
3. using forEach() method
4. using charAt() method
5. using reduce()
6. using for in loop
*/

/*
for (statement 1 ; statement 2 ; statement 3){
    code here...
};
*/
let str = "hello";
for (let i = 0; i < str.length; i++) {
  // no length(), it will be length only
  console.log(str[i]);
}

/*
for ( variable of iterableObjectName) {
    // Code...
}
*/
let str2 = "hello";
for (let char of str2) {
  console.log(char);
}

/*
array.forEach(callback(element, index, arr), thisValue)
*/
let str3 = "hello";
str3.split("").forEach((char, index) => {
  console.log(`${index}:${char}`);
});

/*let index = 0;
while (index < str.length) {
  let char = str.charAt(index);
  // code here...
  index++;
}
*/
let str4 = "Hello";
let index = 0;
while (index < str4.length) {
  console.log(str4.charAt(index));
  index++;
}

// includes() method
//string.includes(searchvalue, start)
let sss = "welcome to whatever this is";
let check = sss.includes("to wh");
console.log(check);
