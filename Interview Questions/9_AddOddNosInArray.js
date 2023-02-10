let arr=[10,13,67,85,90,86,64,3,44,60]
let sum=0
for (let index = 0; index < arr.length; index++) {
    if (arr[index]%2!=0) {
        sum=sum+arr[index]
    }
}
console.log("Sum of Odd nos in the array is : "+sum);