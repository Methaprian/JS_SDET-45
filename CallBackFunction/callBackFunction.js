function sum(data1,data2){
    console.log("Sum = "+data1+data2);
}
function difference(data1,data2){
    console.log("Difference = "+data1-data2);
}
function prod(data1,data2){
    console.log("Product = "+data1*data2);
}
function div(data1,data2){
    console.log("Divison = "+data1/data2);
}
function percent(data1,data2){
    console.log("Percentage = "+(data1*data2)/100+"%");
}
//CallBack Function
function arithmetic(data1,data2,operation){
    operation(data1,data2);
}
arithmetic(45,10,percent)