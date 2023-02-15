let str="Methaprian"
let arr=new Array()
for (let i = 0; i < str.length; i++) {
    if (str[i]=='a'||str[i]=='e'||str[i]=='i'||str[i]=='o'||str[i]=='u'||str[i]=='A'||str[i]=='E'||str[i]=='I'||str[i]=='O'||str[i]=='U') {
        arr.push(str[i])
    }
}
console.log(arr);