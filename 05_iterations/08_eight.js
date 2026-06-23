myNums=[1,2,3]

// const myTotal=myNums.reduce(function(acc,currval){
//     console.log(`acc val :${acc} and current value: ${currval}`);
    
//     return acc+currval
// },0)
// console.log(`total value is ${myTotal}`);

const myTotal= myNums.reduce((acc,currval)=> acc + currval,0)
// console.log(myTotal);


const myshoppingcart=[
    {
        course:"js",
        price:3999
    },
    {
        course:"py",
        price:1999
    },
    {
        course:"mob dev",
        price:13999
    },
]
const mytotalprice= myshoppingcart.reduce((acc,item)=> acc+item.price,0)
console.log(mytotalprice);
