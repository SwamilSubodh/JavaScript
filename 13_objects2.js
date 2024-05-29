// Objects using Singleton and Constuctor
// const tinderUser = new Object() =>singleton object
// const tinderUser ={} => non singleton object
const tinderUser ={}
tinderUser.id="123abc"
tinderUser.name="Swamil"
tinderUser.isLoggedIn="False"
// console.log(tinderUser);
const regularUser ={
    email:"swamil@gmail.com",
    fullname:{
         userfullname:{
            firstname:"Swamil",
            lastname:"Subodh"
         }
    }
}
console.log(regularUser.fullname.userfullname)

const obj1 ={1:"a", 2:"b"}
const obj2 ={3:"a" ,4:"b"}
const obj3 = Object.assign({},obj1,obj2)
console.log(obj3)

//Object destructuring