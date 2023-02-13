let arr=[10,13,67,85,90,86,64,3,44,60]
let EvenArr=[]
let OddArr=[]
for (let index = 0; index < arr.length; index++) {
    if (arr[index]%2==0) {
        EvenArr.push(arr[index])
    }
    if (arr[index]%2!=0) {
        OddArr.push(arr[index])
    }  
}
console.log("Even Nos are "+EvenArr);
console.log("Odd Nos are "+OddArr);
// console.log(`Even Nos are ${EvenArr}
// Odd Nos are ${OddArr}`);