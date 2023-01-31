//Switch Condition
console.log("Switch Statement");
var personAge=45
var voterID=true
switch (personAge) {
    case 17:console.log("Age : "+personAge+" --> The Person is Not Eligible to Vote")
            break;
    case 45: console.log("Age : "+personAge+" --> The Person is Eligible to Vote")
            break;
    default:console.log("Check for Voter ID and Age of the Person")
}