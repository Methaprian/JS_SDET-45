// class s_data {
//     constructor(name, id, subject, result) {
//         this.name = name
//         this.id = id
//         this.subject = subject
//         this.result = result
//     }
// }

function s_data(name,id,subject,result){
    this.name=name
    this.id=id
    this.subject=subject
    this.result=result
}
var data1=new s_data("SKM",1,["Sel","Java"], function() {return "Pass"})
var data2=new s_data("Methaprian",2,["IO","JS"],function(){return "Pass"})
// console.log(data1);
// console.log(data2);
console.log(data1.name);
console.log(data1.id);
console.log(data1.subject[0]);
console.log(data1.result());