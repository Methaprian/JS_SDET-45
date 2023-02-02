let str="testyantra"
let countA=0
let countE=0
let countI=0
let countO=0
let countU=0
for (let i = 0; i < str.length; i++) {
    let ch=str.charAt(i)
    if(ch=='a'||ch=='e'||ch=='i'||ch=='o'||ch=='u'||ch=='A'||ch=='e'||ch=='I'||ch=='O'||ch=='U'){
        if (ch=='e'||ch=='E') {
            countE++
        }
        if (ch=='a'||ch=='A') {
            countA++
        }
        if (ch=='i'||ch=='I') {
            countI++
        }
        if (ch=='o'||ch=='O') {
            countO++
        }
        if (ch=='u'||ch=='U') {
            countU++
        }
    }
}
console.log("a ----> "+countA);
console.log("e ----> "+countE);
console.log("e ----> "+countI);
console.log("e ----> "+countO);
console.log("e ----> "+countU);