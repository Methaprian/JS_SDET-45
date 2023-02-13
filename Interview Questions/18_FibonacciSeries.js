let range=15
let init=0
let nextInit=1
let sum=0
for (let index = 1; index <=range; index++) {
    console.log(init);
    sum=init+nextInit
    init=nextInit
    nextInit=sum
}
