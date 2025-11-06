// Sets
// usecases: Sets are important as they do not allow duplicates. therefore, they can be used to separate duplicate values from the problem

const studentID = new Array();
studentID.push(1);
studentID.push(2);
studentID.push(1);

console.log(studentID);
// output: 1, 2, 1 (duplicates are seen.)
// sets are generally helpful in that regard

const studentIDs = new Set();

studentIDs.add(1);
studentIDs.add(2);
studentIDs.add(1);
console.log({ studentIDs });
// output: 1, 2 (no duplicate values)

// but we can not access the values inside the set like we can do in array
// so arrays can be converted into sets and sets can be converted into arrays.
const id = [1, 2, 3, 4, 4, 4];
const uniquevalues = new Set(id);
console.log({ uniquevalues });

// converting the set into an array now
const newval = [...uniquevalues]; // this way, we can convert sets into an array
console.log(newval);
