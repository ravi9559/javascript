const user ={
    username: "sam",
    price:999,
    welcomeMessage: function(){
        console.log(`${this.username}, welcome to website`);
    }
}




// user.welcomeMessage()

// user.username="ravi"

// user.welcomeMessage()

// console.log(this);

// function chai( ) {

//     let username = "Ravi"
//     console.log(this.username);
// }
// chai()


const  chai= () =>{

        let username = "Ravi"
        console.log(this);
    }
    // chai()

//   const addTwo = ( num1, num2) => {

//     return num1 + num2

//     }


// const addTwo = ( num1, num2) =>     (  num1 + num2    );

const addTwo = ( num1, num2) =>     (  {username: "hitesh"}    )
    
    console.log(addTwo(3, 4));

   