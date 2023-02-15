let str="I am an employee of TestYantra"
// function rev(string){
//     return string.split("").reverse().join("").split(" ").reverse().join(" ")
// }
// console.log(rev(str));  // I ma na eeyolpme fo artnaYtseT
function input(str){
    words=str.split(" ")
    rewords=words.map(word => word.split('').reverse().join(''))
    result1=rewords.join(" ")
    console.log(result1);
}

input(str)