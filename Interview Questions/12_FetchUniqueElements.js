let arr=[10,24,32,45,10,24,76,89,60,45]
console.log("Unique Elements in the Array : ");
for (let i = 0; i < arr.length; i++) {
	for (let j =i+1; j < arr.length; j++) {
		if(arr[i]==arr[j]) {
			arr[j]=0
		}
	}
}
for (let index = 0; index < arr.length; index++) {
    if (arr[index]!=0) {
        console.log(`${arr[index]}`)
    }
    // console.log(arr[index]);
}    