let str="testyantra"
let countC=0
let countV=0
let arr=[]
for (let i = 0; i < str.length; i++) {
    if(str[i]=='a'||str[i]=='e'||str[i]=='i'||str[i]=='o'||str[i]=='u'||str[i]=='A'||str[i]=='E'||str[i]=='I'||str[i]=='O'||str[i]=='U'){
        countV++
        arr.push(str[i])
    }else{
        countC++
    }
}
console.log("Consonants : "+countC);
console.log("Vowels : "+countV);
console.log(arr);