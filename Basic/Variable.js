const accountId = 3112005  //constant value (cannot be reassigned)
let accountEmail = "gwscary@gmail.com" //can be reassigned but not redeclared
var accountPassword = "12345" //can be redeclared and reassigned
accountCity = "Mumbai"
let accountState;

//accountId = 2 //Not allowed

accountEmail = "Wdc@gc.com"
accountPassword = 755536
accountCity = "Navi Mumbai"

console.log(accountId);

console.table([accountId,accountEmail,accountPassword,accountCity,accountState])