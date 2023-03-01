let input="AxB1#*eZ83a5"
let arr=new Array()
for (let i = 0; i < input.length; i++) {
    if (!(input[i]>='0' && input[i]<='9')) {
        arr.push(input[i].replaceAll(`${input}`,'a'))
        // arr=input[i].split('1,83,5')
        // arr=input[i].replace('')
        // arr=input[i].split(input[i])
        
        // arr[i]=input[i].replaceAll(`${input}`,'a')

    }
    
}
console.log(arr);