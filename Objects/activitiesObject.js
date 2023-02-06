let activities={
    act_name : "Ranji Trophy",
    act_Start_Duration : "12-06-2023",
    act_End_Duration : "18-12-2023",
    act_Description : "Cricket Tournament conducted by BCCI in India, wherein all States  will represent their Cricket Teams",
    schedule : function(){
        const matchups=["TN - JHARKHAND","KAR - KERALA","DELHI - MUMBAI","AP - ASSAM",'BIHAR - NAVI MUMBAI']
        return matchups
    },
    dates:{
        match1:"12-06-2023",
        match2:"12-06-2023",
        match3:"13-06-2023",
        match4:"13-06-2023",
        match5:"13-06-2023"
    }
}
for (const data in activities) {
    console.log(data + "\t : "+activities[data]);
}

// for (const data of activities) {
//     console.log(data);
// }