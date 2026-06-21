// for of

const arr=[1,2,3,4,5]
for (const num of arr) {
    // console.log(num);
}

// MAPS

const map=new Map()
map.set(`IN`,"INDIA")
map.set(`FR`,"FRANCE")
map.set(`US`,"UNITED STATES")

// console.log(map);
for (const [key,value] of map) {
    console.log(key,':-',value);
}//doesnot work on objects