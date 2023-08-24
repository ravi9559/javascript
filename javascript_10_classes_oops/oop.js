const user = {

    username: " Ravi",
    logincount: 8,
     signedIn: true,


     getUserDetails: function(){
        // console.log(" Got user details from databse");

        // console.log(`Username: ${this.username}`);

        // console.log(this);

     }


}



// console.log(user.username);
// console.log(user.getUserDetails());
// console.log(this);

// const promiseOne = new Promise()
// const date= new Date()





function User(username, loginCount, isLoggedIn) {

    this.username = username;
    this.loginCount= loginCount;
    this.isLoggedIn= isLoggedIn;
    // return this

}





const userOne = new User("hitesh", 12, true)

const userTwo = new User("ravi", 11, false)
console.log(userOne.constructor);
// console.log(userTwo);


