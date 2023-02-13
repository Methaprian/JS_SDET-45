let stud={
    stud_name:"SKM",
    stud_ID:1233057,
    stud_email:"skm@gmail.com",
    stud_dept:function(){
        return (`Name of the Student :${this.stud_name} 
Student ID : ${this.stud_ID} 
Student email : ${this.stud_email}`);
        // return 'ECE'
    },
    otherDetails:{
    place:"TN",
    pincode:625019
    }
}

let student=Object.create(stud)
student.stud_ID=98766
student.otherDetails.place="AAA"
console.log(student.otherDetails);
// console.log(student); // Empty Object
// student.stud_ID=1233060 //----------------> Overriding a Property inside the Object
// student.stud_name="Methaprian"
// console.log(student.stud_name); // Access the object member using Object Creation
// console.log(student.stud_ID); // If overridden stud_ID=1233060   // If Not Overridden stud_ID=1233057
// console.log(student.stud_dept()); // Function Invocation
// console.log(this.stud_ID); // -----> Undefined

// console.log(stud);
// student.otherDetails.place="Madurai" // Overriding
// console.log(student.otherDetails.place);
// console.log(student);