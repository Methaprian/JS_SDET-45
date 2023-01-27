//else - if Condition
console.log("Else - if Condition");
var studentId=12345678
var noOfDigits=8
var maxSIDLength=10
if(studentId>maxSIDLength){
    console.log("Student ID is InValid");
}else if (studentId>=noOfDigits && studentId<=maxSIDLength) {
    console.log("Valid Student ID");
}else{
    console.log("Enter a Valid Student ID");
}