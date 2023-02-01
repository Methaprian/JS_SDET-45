var arr=[1,2,5,4,1,4,4]
let min=arr[0]
for (let index = 0; index < arr.length; index++) {
    if (arr[index]<min) {
        min=arr[index]
    }
}
console.log("The Maximum Value in the Array is : "+min);