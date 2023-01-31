//Type-1
console.log("--------- Type-1 --------");
var sID=new Array(124,233,545,447,159)
console.log(sID[0]);
console.log(sID[1]);
console.log(sID[2]);
console.log(sID[3]);

//Issue in Type-1
console.log("--------- Type-1 Issue ---------");
//If the data passed inside the object is Number type, then it will not be considered as the Data
//It will be considered as the length of the Object
var arr3=new Array(4)
console.log(arr3);
console.log(arr3.length);

//Type-2
console.log("--------- Type-2 --------");
var sName=[1,2,3,4,'A']
console.log(sName[0]);
console.log(sName[1]);
console.log(sName[2]);
console.log(sName[3]);
console.log(sName[4]);
//console.log(sName[5]); ---> Undefined