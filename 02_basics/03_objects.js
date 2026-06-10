//singleton

//object literal
mysym = Symbol('mykey');
const jsuser = {
    name: 'pari',
    age: 20,
    isLoggedin: false,
    daysloggedin: ['Monday', 'Tuesday', 'Wednesday'],
    city: 'Delhi',
    //mysym: myvalue does not work because it is string
    [mysym]: 'myvalue',
    email:"parigupta@gmail.com"
};

console.log(jsuser);
console.log(jsuser[mysym]);
console.log(jsuser["email"])

object.freeze(jsuser);
jsuser.email = "parigupta@micro.com"
console.log(jsuser);

jsuser.greeting=function(){
    console.log("hello js user");
}
console.log(jsuser.greeting());
