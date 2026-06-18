const userEmail="p@arigupta"
if (userEmail) {
    console.log("got it");
    
} else {
    console.log("not got it");
}


// falsy values: false , 0,-0 , 0n,"",null,undefined,NaN

//truthy: "0","false"," ",function(){},[],{ }

// NUllish coalescing operator(??): null undefined

let val1;
// val1=5??10
//val1=null?10
//val1=undeined??10

//terniary operator

condition? true:false

const iceteaprice=100

iceteaprice<=80?console.log("lesser than 80"):console.log("more than 80");

