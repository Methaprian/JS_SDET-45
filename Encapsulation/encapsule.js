"use strict";
class studentData{
    name="SKM"
    #id="Confidential Data"

    // displayData(){
    //     console.log(this.#id);
    // }
    get data(){
        return this.#id
    }
    set setData(val){
        this.#id=val
    }
}
let sData=new studentData()
// sData.displayData()
sData.setData="1233057"
console.log(sData.data);

// console.log(sData.data);