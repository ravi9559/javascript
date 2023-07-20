// singleton
// Object.create
// object literals

const mySym = Symbol("key1")

const JsUser ={

    name: "Ravi",
    "full Name" : "Ravi Chaudhary",

    [mySym]: "mykey1",

     age: 18,
     location:"Bangalore",
    email: "ravi@gmail.com",
     isLoggedIn:false,
     lastLoginDays: ["Monday", "Saturday"]

}

// console.log(JsUser.email);
// console.log(JsUser["email"]);
// console.log(JsUser["full Name"]);
// console.log( JsUser[mySym]);

JsUser.email= "rchaudhary@shopagroup.com";
//Object.freeze(JsUser)
JsUser.email=   "ravi@gmail.com"

// console.log( JsUser);

JsUser.greating =function(){
     console.log("Hello JS user");

}

JsUser.greatingTwo =function(){
    console.log(`Hello JS user, ${this.name}`);

}


console.log(JsUser.greating());
console.log(JsUser.greatingTwo());