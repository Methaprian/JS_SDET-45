var employeeDetails={
    f_Name : "Methaprian",
    l_Name : "S.K",
    designation : "Software Engg",
    skillSet : ['JS','API',"Java","Selenium"],
    location : function(){
        loc="Bangalore"
        return this.loc
    },
    companyDetails : {
        company_Name: "TYSS",
        Company_Location: "Bangalore"
    }
}
console.log("<---- Object ----> ");
console.log(employeeDetails);
console.log("<---- Object.Property ----> ");
console.log(employeeDetails.f_Name);
console.log("<---- Object.Array ----> ");
console.log(employeeDetails.skillSet);
console.log("<---- Object.Function ----> ");
console.log(employeeDetails.location());
console.log("<---- Object.Object ----> ");
console.log(employeeDetails.companyDetails);
console.log("<---- Object.Object.Property ----> ");
console.log(employeeDetails.companyDetails.Company_Location);