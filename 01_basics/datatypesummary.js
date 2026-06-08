//PRIMITIVE
// 7 TYPES: strings,null,undefined, number , boolean, bigint, symbol
//Reference(non primitive)
// Array, objects, functions

const heros=["shaktiman","superman","batman"]

let myobj={
    name:"Pari",
    age: 20,
}

const myfunction=function(){
    // console.log("hello world");
    
}
// console.log(typeof heros );

// _________________________________memory type__________________________________


// stack memory : Primitive
let myyoutubename = "Pariguptacode"

let anotheryoutube= myyoutubename
anotheryoutube="pariguptachannel"

console.log(myyoutubename);
console.log(anotheryoutube);

// heap  memory: Non primitive

let userone={
    email :"userone@google.com",
    upi:"user@ybl"
}

let usertwo =userone
usertwo.email= "usertwo@google.com"
console.log(userone.email);
console.log(usertwo.email);

