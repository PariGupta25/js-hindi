const user= {
    username:"hitesh",
    price:999,
    welcomemsg : function(){
        console.log(`${this.username} ,welcome to website`);
        
    }
}
// user.welcomemsg()
// user.username="sam"
// user.welcomemsg()

console.log(this)

// arrow function

const chai =()=>{
    let username ="hitesh"
    console.log(this);
    
}