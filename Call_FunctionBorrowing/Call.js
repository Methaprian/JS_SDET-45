var stud={
    s_id:1234,
    s_name:"SKM",
    srole:function(){
        console.log(`Name : ${this.s_name} , ID : ${this.s_id}`);
        // console.log(this.id+" "+this.name);
    }
}

var admin={
    ad_id:"ad123",
    ad_name:"Metha",
    ad_role:function(){
        console.log(`Admin Name : ${this.ad_name} , Admin ID : ${this.ad_id}`);
        // console.log(this.ad_id +" "+this.ad_name);
    }
}
// admin.ad_role.call(stud)
// stud.srole.call(admin)
function activity(act_Name,act_Desc){
    console.log(`Activity Name : ${act_Name} , Participant ID : ${this.s_id} , Participant Name : ${this.s_name} , Activity Description : ${act_Desc}`);
}

activity.call(stud,"Cricket","T-10 Tournament")


//  * This an Example for bind()
//  * Here the object which is passed has a replica of that object passed.
//  * Hence, it should be stored in a new reference Variable

let BIND=activity.bind(admin,"Football","5's Tournament")
BIND()



activity.apply(stud,['Badminton','Singles Tournament'])