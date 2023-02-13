let str="I am an employee of TestYantra"
console.log("Input String : "+str);
// Using inbuilt Methods
let arr=str.split(" ")
// console.log(arr);
let arr1=[]
for (let index = 0; index < arr.length; index++) {
    arr1=arr1+arr[index]
}
console.log("String Without Spaces(Using built-in Methods) : "+arr1);

// Without Using inbuilt methods
let str1=""

for (let index = 0; index < str.length; index++) {
    let ch=str.charAt(index)
    if (str[index]==" ") {
        str1[index]=""
    }else{
        str1=str1+ch
    }
}
console.log("String Without Spaces(Without using built-in Methods) : "+str1);