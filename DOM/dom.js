document.getElementById("greetings").innerHTML="Hello Good Morning"
document.getElementById("js").innerHTML="JavaScript Started"
document.getElementById("clickbtn").onclick=clicked
function clicked(){
    document.getElementById("clickbtn").innerHTML="clicked"
}
document.getElementById("time").onclick=onclicktime
function onclicktime(){
    document.getElementById("date").innerHTML=Date()
}