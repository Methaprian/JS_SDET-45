let stud_Data={
    s_name:"SKM",
    s_ID:12457801,
    s_dept:function(){
        console.log(`Student Name : ${this.s_name} 
Student ID : ${this.s_ID}`);
        let stud_bal=7500
        console.log(`Student Balance : ${stud_bal}`);
    }
}
// stud_Data.s_dept()

let admin_Data={
    admin_name:"TY",
    admin_ID:1234,
    admin_dept:function() {
        admin_contact=9876543210
        // console.log(this.s_dept()); // Error -----> this.s_dept is not a function
        // console.log(stud_Data.s_dept().stud_bal); // Error : Cannot read properties of undefined (reading 'stud_bal')
        // console.log(stud_Data.s_ID); // Reading data using Object reference
        // console.log(this.admin_ID); // logs the value of admin_ID
        // console.log(this.stud_bal); // Undefined  ----> In the current object, there is no stud_bal property
        console.log(this.admin_contact); // Undefined ----> 
        console.log(admin_contact);
    }
}
admin_Data.admin_dept()