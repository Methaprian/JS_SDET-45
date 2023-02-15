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
}

obj=new stud_BASE("SKM",1234,"skm@gmail.com")

module.exports=stud_BASE
