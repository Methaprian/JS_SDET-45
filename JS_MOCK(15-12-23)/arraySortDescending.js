let arr=[8,45,76,2,65,9]
for (let i = 0; i < arr.length-1; i++) {
    for (let j = 0; j < arr.length-1; j++) {
        if(arr[j]<arr[j+1]){
            let t=arr[j]
            arr[j]=arr[j+1]
            arr[j+1]=t
        }
    }
}
for (let index = 0; index < arr.length; index++) {
    console.log(arr[index]);    
}