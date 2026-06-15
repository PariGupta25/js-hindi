// var c=300
let a =200

if (true){
    let a=10,
    b=20
    console.log("Inner",a);
}
console.log(a);
// console.log(b);
// console.log(c);

function one(){
    const username="pari"
    function two(){
        const website ="youtube"
        console.log(username);
    }
    // console.log(website);
    two()
}
one()
// two one se values lesakta hai but not one kyuki one is bigger function

if (true){
    const username="hitesh"
    if(username==="hitesh"){
        const website="youtube"
        console.log(website+username);
        
    }
    console.log(website);
    
}
console.log(username);
