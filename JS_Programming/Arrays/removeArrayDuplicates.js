var arr=[1,2,5,4,1,4,4]
console.log("Duplicate Elements in the Array : ");
for (let i = 0; i < arr.length; i++) {
	for (let j =i+1; j < arr.length; j++) {
		if(arr[i]==arr[j]) {
			arr[j]=0
		}
	}
}
for (let index = 0; index < arr.length; index++) {
    if (arr[index]!=0) {
        console.log(arr[index])
    }
}