let country=[
    {fname:"abc",address:"India"},
    {fname:"def",address:"Europe"},
    {fname:"rst",address:"India"},
    {fname:"xyz",address:"Europe"},
    {fname:"mno",address:"Russia"}
]
// Count of people living in India
let count=0
for (const key in country) {
    if (country[key].address=="India") {
        count++
    }
}
console.log(`No. of People Living in India is : ${count}`);

// Country Name ==> Count
let IndiaCount=0
let EuropeCount=0
let RussiaCount=0
for (const key in country) {
    if (country[key].address=="India") {
        IndiaCount++
    }
    if (country[key].address=="Europe") {
        EuropeCount++
    }
    if (country[key].address=="Russia") {
        RussiaCount++
    }
}
console.log(`India ==> ${IndiaCount}`);
console.log(`Europe ==> ${EuropeCount}`);
console.log(`Russia ==> ${RussiaCount}`);