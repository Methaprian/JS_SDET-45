let str="testyantra"
let str1=""
for (const key in str) {
    if (str[key]=='t') {
        str1=str1+'T'
    } else {
        str1=str1+str[key]
    }        
}
console.log(str1);