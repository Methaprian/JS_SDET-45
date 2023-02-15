function STR(str) {
    console.log(str.split('o'));
}
//STR("good morning")

function CAPS(str){
    let str1=""
    for (let i = 0; i < str.length; i++) {
        ch=str.charAt(i)
        if(ch=='a'||ch=='e'||ch=='i'||ch=='o'||ch=='u'){
            str1=str1+ch.toUpperCase()
        }else{
            str1=str1+ch
        }
    }
    console.log(str1);
}
CAPS("good morning")