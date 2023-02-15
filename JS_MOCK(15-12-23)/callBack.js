function cricket(no_of_Teams,no_of_participants){
	console.log(" ---------> Cricket Tournament <---------")
	console.log(`Total Teams : ${no_of_Teams}
Total No of  Participants : ${no_of_participants}`)
}

function football(no_of_Teams,no_of_participants){
	console.log(" ---------> Football 5's Tournament <---------")
	console.log(`Total Teams : ${no_of_Teams}
Total No of  Participants : ${no_of_participants}`)
}

function chess(no_of_Teams,no_of_participants){
	console.log(" ---------> Chess Singles Tournament <---------")
	console.log(`Total Teams : ${no_of_Teams}
Total No of  Participants : ${no_of_participants}`)
}

function volleyball(no_of_Teams,no_of_participants){
	console.log(" ---------> Beach Volleyball Tournament <---------")
	console.log(`Total Teams : ${no_of_Teams}
Total No of  Participants : ${no_of_participants}`)
}

function sportActivity(activity,no_of_Teams,no_of_participants){
	activity(no_of_Teams,no_of_participants)
}

sportActivity(football,10,50)