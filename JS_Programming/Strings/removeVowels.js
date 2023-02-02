let str='testyantra'
let str1=""
for (const key in str) {
    if (!(str[key]=='a'||str[key]=='e'||str[key]=='i'||str[key]=='o'||str[key]=='u'||str[key]=='A'||str[key]=='E'||str[key]=='I'||str[key]=='O'||str[key]=='U')) {
        str1=str1+str[key]
        
    }
}
console.log(str1);