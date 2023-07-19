const accountId= 1453879;
let accountEmail ="ravi@google.com";
var accountPassword="12345";

/* Prefer not to use var 
because of issue in block scope and functional scope */
accountCity="Jaipur";
 let accountState;
//  accountId= 2; not allowed
accountEmail:"ravi@gmail.com  ";
accountPassword:"987678";
accountCity:"bangalore";
console.log(accountId);
console.table([accountId, accountEmail, accountPassword, accountCity, accountState]);