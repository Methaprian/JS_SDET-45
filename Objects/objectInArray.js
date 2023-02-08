let data_arr=[
    Admin={
        name:"SKM",UN:"MSD",pwd:"123*",email:"skm@xyz.com"
    },
    Student={
        name:"Anupraj",UN:"AJ",pwd:'123467890*',email:"aj@gmail.com"
    },
    Activities={
        name:"Cricket",StartDate:"12-03-2023"
    }
]
//console.log(data_arr[0]);
for (let index = 0; index < data_arr.length; index++) {
    console.log(data_arr[index].name);    
}