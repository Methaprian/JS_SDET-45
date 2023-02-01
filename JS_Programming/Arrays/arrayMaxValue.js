var arr=[1,2,5,4,1,4,4]
let max=arr[0]
for (let index = 0; index < arr.length; index++) {
    if (arr[index]>max) {
        max=arr[index]
    }
}
console.log("The Maximum Value in the Array is : "+max);