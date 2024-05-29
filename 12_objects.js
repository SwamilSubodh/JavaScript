//singleton - constructor se ek hi object
//construtor se singleton
//Object Literals and constructors(object.create)->constructor
const mySym =Symbol("key1") 

const JsUser={
    name:"Swamil",
    "full name":"Swamil Subodh",
    [mySym]:"Key1",
    age:"19",
    location:"Jharkhand",
    email:"swamil@gmail.com",
    isLoggedIn: false,
    LastLoginDays:["Monday","Saturday"]
 }
 console.log(JsUser.email)
 console.log(JsUser["email"])
 console.log(JsUser["full name"])
 console.log(JsUser.mySym) 

JsUser.email="swamil11@gmail.com"
//Object.freeze(JsUser) //to lock the values
JsUser.email="swamil11@microsoft.com"
console.log(JsUser)

 JsUser.greeting = function(){
   console.log("Hello JS User");
 }
 console.log(JsUser.greeting); // undefined
 console.log(JsUser.greeting()); 

 JsUser.greetingtwo = function(){
   console.log('Hello JS User ,${this.name}');
 }
 console.log(JsUser.greetingtwo); // undefined
 console.log(JsUser.greetingtwo()); 

 