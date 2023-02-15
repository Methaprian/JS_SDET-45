function consonant(input){
    for (let i = 0; i < input.length; i++) {
        let count=0
        for (let j = 0; j < input.length; j++) {
            if(input[i]==input[j]){
                if(j<i){
                    break
                }
                count++
            }
        }
        if (count>=1) {
            if (!(input[i]=='a'||input[i]=='e'||input[i]=='i'||input[i]=='o'||input[i]=='u'||input[i]=='A'||input[i]=='E'||input[i]=='I'||input[i]=='O'||input[i]=='U')) {
                console.log(`${input[i]} --> ${count}`);
            }
        }
    }
}
consonant("methaprian")