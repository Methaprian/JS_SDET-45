async function stud(){
    console.log("Login into Application");

    var p=new Promise((resolve,reject)=> {
        setTimeout(() => {
            resolve("In Progress")
            reject("Rejected")
        }, 3000);
    })
    await p.then((msg)=>{console.log(msg);}).catch((msg)=>{console.log(msg);})

    var p=new Promise((resolve,reject)=> {
        setTimeout(() => {
            resolve("Completed")
            reject("Rejected")
        }, 1000);
    })
    await p.then((msg)=>{console.log(msg);}).catch((msg)=>{console.log(msg);})
    console.log("Logged Out of the Application");
}
stud()