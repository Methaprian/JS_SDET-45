//var arr=[1,2,5,4,1,4,4]
var arr=[3,5,6,1,2,1,1]
console.log("Duplicate Elements in the Array : ");
for (let i = 0; i < arr.length; i++) {
	var count=0;
	for (let j =0; j < arr.length; j++) {
		if(arr[i]==arr[j]) {
			if (j<i) {
				break
            }
			count++;
		}
	}
	if(count>1) {
		console.log(arr[i]+" ---> "+count);
		}
	}