let str="I am an employee of TestYantra"
function rev(string){
    return string.split("").reverse().join("").split(" ").reverse().join(" ")
}
console.log(rev(str));  // I ma na eeyolpme fo artnaYtseT