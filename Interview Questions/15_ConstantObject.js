const stud={
    stud_id:1234
}
stud.stud_id=5678
console.log(stud.stud_id);  // ----> if an object is declared as const, the parameter present in the object can be modified
                            // ----> If a variable is not an object but declared as const, the value cannot be 
                            //       re-declared or re-initialised