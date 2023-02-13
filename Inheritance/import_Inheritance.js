const stud_BASE = require("./inheritance");

importClass=require("./inheritance")
// console.log(importClass.stud_name);

class Inherit{
    r=45
}

let inherit_data=new Inherit()

console.log(inherit_data.r); // ------> Data from current Class

console.log(obj.stud_name); // --------> Data from Inherited Class
obj.stud_email="xyz@gmail.com"