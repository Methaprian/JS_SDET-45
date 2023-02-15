let arr=[10,20,30,40,50,45,32]
let arr1=['a','b','c','d']
console.log(arr);

function statement(val) {
    return val>25
}
(itr1)=> {
    return val
}
// console.log(arr.concat(arr1)); //---> Combines 2 arrays and adds all the Data present in the 2nd array at the last Index value 
console.log(arr.join('->')); //----> Replaces all the Seperators and returns a String
// console.log(arr.lastIndexOf(50)); //----> Returns the Index value of the element if the element is present else returns -1
// console.log(arr.length); //------> Returns the Length of the array
// console.log(arr.pop()); //------> Returns and Removes the value present in the Last Index permanently
// console.log(arr.reverse()); //------> Reverses the elements present in the array
// console.log(arr.push([12,13])); //----->Returns the length of the modified array. Adds the Element to the last index of the array Permanently
// console.log(arr.slice(1)); //----> Returns Array based on the index specified
// console.log(arr.includes(10,0)); //----> Searches for the element in the array.. Found--TRUE    NotFound--FALSE
// console.log(arr.shift()); //----> Returns and Removes the value present in the 0th Index Permanently
// console.log(arr.unshift('a','b')); //---->Returns the length Adds element at the 0th Index Permanently
// console.log(arr.sort((a,b)=>b-a)); //----> Sorts the array in Assending/Descending Order Permanently
// console.log(arr.toString()); //----> Converts Array into String
// console.log(arr.map(statement));  //----> Returns an Array of elements based on the function passed 
// console.log(arr.find(statement)); //
// console.log(arr.filter(statement));
// console.log(arr.splice(2));
// console.log(arr.copyWithin(3,4));
// console.log(arr.fill(1,2,4));
// console.log(arr.entries()); ----------> Pending
console.log(arr);