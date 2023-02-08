function cricket(no_of_Participants){
    console.log(" --> Activity : Cricket <--");
    console.log("Start Date : 21-04-2023");
    console.log("End Date : 30-05-2023");
    console.log("No_of_Participants : "+no_of_Participants); 
}
function chess(no_of_Participants){
    console.log(" --> Activity : Chess <--");
    console.log("Start Date : 21-04-2023");
    console.log("End Date : 30-04-2023");
    console.log("No_of_Participants : "+no_of_Participants);
}
function carrom(no_of_Participants){
    console.log(" --> Activity : Carrom <-- ");
    console.log("Start Date : 21-04-2023");
    console.log("End Date : 30-04-2023");
    console.log("No_of_Participants : "+no_of_Participants);
}
function football(no_of_Participants){
    console.log(" --> Activity : Football <-- ");
    console.log("Start Date : 21-04-2023");
    console.log("End Date : 30-05-2023");
    console.log("No_of_Participants : "+no_of_Participants);
}
function volleyball(no_of_Participants){
    console.log(" --> Activity : Volleyball <-- ");
    console.log("Start Date : 21-04-2023");
    console.log("End Date : 12-05-2023");
    console.log("No_of_Participants : "+no_of_Participants);
}
function sport(no_of_Participants,Activity){
    Activity(no_of_Participants)
}

sport(150,cricket)
sport(90,football)
sport(46,chess)
sport(32,carrom)
sport(80,volleyball)