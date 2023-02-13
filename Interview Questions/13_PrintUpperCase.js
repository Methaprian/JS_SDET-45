let str="I am an employee of TestYantra"
console.log("The Upper Case letters Present in the Given String are : ");
for (let index = 0; index < str.length; index++) {
    if (str.charCodeAt(index)>=65 && str.charCodeAt(index)<=90) {
        console.log(str[index]);
    }
}