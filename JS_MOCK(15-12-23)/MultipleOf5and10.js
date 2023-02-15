function multiple_5_10(inputNum){
    if (inputNum%5==0 && inputNum%10==0) {
        console.log(`${inputNum} is a multiple of 5 and 10.`);
    } else if(inputNum%5==0){
        console.log(`${inputNum} is a multiple of 5`);
    } else if(inputNum%10==0){
        console.log(`${inputNum} is a multiple of 10`);
    }
    else {
        console.log(`No multiples of 5 and 10 ${inputNum}`);
    }
}
multiple_5_10(8)