class student{
    constructor(s_name,s_ID,s_email){
        this.s_name=s_name
        this.s_ID=s_ID
        this.s_email=s_email
    }
    a=10
    static b=5
    static demo(){
        console.log(this.a);
        console.log(this.b);
        let stud=new student() // To access the Non-Static member into static Method ----> Create an Object for the Non-Static Member
        console.log(stud.a);
    }
    sample(){
        console.log(this.a);
        console.log(this.b);
        console.log(student.b);
    }
}
S=new student("SKM",1233057,"skm@gmail.com")
console.log(S);
console.log(S.s_name);
console.log(S.s_ID);
console.log(S.a); // Non-Static Member ---> Use the Object Reference to access the Non-Static Members
console.log(student.b);// Static Member ---> Use Class name to access the static members
console.log();
student.demo()
console.log();
S.sample()