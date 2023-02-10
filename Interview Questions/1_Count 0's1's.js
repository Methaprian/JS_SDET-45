let binary=[0,1,0,0,1,1,1]
let count0s=0
let count1s=0
for (let index = 0; index < binary.length; index++) {
    if (binary[index]==0) {
        count0s++
    } else {
        count1s++
    }
}
console.log(`No of 0's in the array is : ${count0s}
No of 1's in the array is : ${count1s}`);