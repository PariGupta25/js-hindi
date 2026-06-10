// singleton

//const tinderuser= new object()

const tinderuser={}
tinderuser.id = "123@abcf"
tinderuser.name = "SunnySingh"
tinderuser.loggedin= false
 
// console.log(tinderuser);

const regularuser = {
    email: "sunny@abc",
    fullname: {
        userfullname: {
            firstname: "sunny",
            lastname: "singh"
        }
    }
};

// console.log(regularuser.fullname?.userfullname.firstname);

const obj1={1:"a",2:"b"}
const obj2={3:"c",4:"d"}

// const obj2={obj1,obj2}

const obj3= Object.assign({},obj1,obj2)
// console.log(obj3);

const user=[
    {
        id : 123,
        email:"p@gmail.com"
    },
    {
        id:123,
        email:"p@gmail.com"
    },
    {
        id:123,
        email:"p@gmail.com"
    },
    {
        id:123,
        email:"p@gmail.com"
    },
    {
        id:123,
        email:"p@gmail.com"
    }
]
// user[1].email;
// console.log(tinderuser);
// console.log(Object.keys(tinderuser));
// console.log(Object.values(tinderuser));
// console.log(Object.entries(tinderuser));

// console.log(Object.hasOwnProperty("isloggedin"));

const course ={
    coursename : "js in hindi",
    price:2000,
    courseinstructor:"pari"
}
// course.courseinstructor

//deconstruction of constructor
const { courseinstructor:instructor}=course

console.log(instructor);

//Json format 
[
    {},
    {},
    {},
    {}
]
