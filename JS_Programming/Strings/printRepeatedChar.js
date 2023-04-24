let str="testyantra"
for (let i = 0; i < str.length; i++) {
    let ch=str.charAt(i)
    var count=0
        for (let j = 0; j < str.length; j++) {
            if (ch==str.charAt(j)) {
                if (j<i) {
                    break
                }
                count++
            }
        } 
    if (count>1) {
        console.log(ch+" ---> "+count);
    }   
}