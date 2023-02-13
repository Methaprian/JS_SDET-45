let arr=[1,2,4,3,5,7,11,13,24,21,68,17]
for (const key in arr) {
    let count =0
    for (let index = 0; index <=arr[key]; index++) {
        if (arr[key]%index==0) {
            count++
        }
    }
    if (count==2) {
        console.log(`${arr[key]} is Prime`);
    }else{
        console.log(`${arr[key]} is not prime`);
    }
}