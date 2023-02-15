let str="good morning welcome to javascript session"
let arr=str.split(" ")
const VOWELS=['a','e','i','o','u']
let RESULT=""    

for (let i = 0; i < arr.length; i++) {
    let sword=arr[i]
           
        if (VOWELS.includes(sword[2])) {
            let CHAR=sword[0].toUpperCase()
            arr[i]=CHAR+sword.substring(1)
        }
        RESULT=arr.join(" ")
    
}
console.log(RESULT);