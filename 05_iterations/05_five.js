const coding=["java","python","ruby","c++"]
// coding.forEach(function(val){
//     console.log(val);
// })

// function printMe(item){
//     console.log(item);
    
// }

// coding.forEach(printMe)

const myCoding=[
    {
        languageName:"javas",
        langfilename:"js"
    },
    {
        languageName:"python",
        langfilename:"py"
    },
    {
        languageName:"c++",
        langfilename:"cpp"
    },
    {
        languageName:"ruby",
        langfilename:"ry"
    }
]
myCoding.forEach((item)=>{
    console.log(item.languageName);
    
})