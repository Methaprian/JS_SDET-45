let input="AxB1#*eZ8"
let arr=input.split('')
// console.log(arr);
let Upper=''
let Lower=''
let Num=''
let spec=''

for (let i = 0; i < arr.length; i++) {
    if (arr[i]>='A'&&arr[i]<='Z') {
        Upper=Upper+arr[i]
    } else if(arr[i]>='a'&&arr[i]<='z') {
        Lower=Lower+arr[i]
    }else if(arr[i]>='0'&&arr[i]<='9'){
        Num=Num+arr[i]
    }else{
        spec=spec+arr[i]
    }
}
console.log(`UpperCase Alphabets = ${Upper}
LowserCase Alphabets = ${Lower}
Numericals = ${Num}
Special Characters = ${spec}`);