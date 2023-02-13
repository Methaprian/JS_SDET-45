class stud_BASE{
    constructor(stud_name,stud_id,stud_email){
        this.stud_name=stud_name
        this.stud_id=stud_id
        this.stud_email=stud_email
    }
    student(){
        return `Stud Name : ${this.stud_name}
Stud ID : ${this.stud_id}
Stud Email : ${this.stud_email}`
    }
    static a=10
    b=20
}

importclass=require("./inheritance");

class STUD extends stud_BASE{
    get sname(){
        return this.stud_name
    }
    set Sname(name){
        stud_name=name
    }
    get sid(){
        return this.stud_id
    }
    set Sid(id){
        this.stud_id=id
    }
    get semail(){
        return this.stud_email
    }
    set Semail(email){
        this.stud_email=email
    }
}

let STUDENT=new STUD("SKM",1234,"skm@gmail.com")
// console.log(STUDENT);
// console.log(STUDENT.stud_email);

console.log(STUDENT.student());
STUDENT.Semail="xyz@gmail.com"
console.log(STUDENT.student());

// console.log(STUD.a);    // Static member can be accessed by using the Class Name
// console.log(STUDENT.b); // Non-Static Members can be accessed by using Object Reference of the Class