function saymyname(){
    console.log(P);
    console.log(A);
    console.log(R);
    console.log(I);
}

// saymyname()

function addno(no1,no2){
    // console.log(no1+no2)
    let result = (no1+no2)
    return result
}
// const result=addno(25,35)
// console.log("Result:",result);

function loginusermsg(username){
    // if(username==undefined)
    if(!undefined){
        console.log("Enter a username");
        return
    }
    return`${username} just logged in`
}

console.log(loginusermsg());
