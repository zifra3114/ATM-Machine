#! /usr/bin/env node
import inquirer from "inquirer"

let myBalance =10000; // dollar
let myPincode = 4321;

let pinAnswer = await  inquirer.prompt ([{
   name: "pin",
   message : "Enter your pin number",
   type:"number"
}])
    
if (pinAnswer.pin===myPincode){
    console.log("correct your pin code!!!");
}
    else {
        console.log("Incorrect pin code");
    }
   let operationAnswer =await inquirer.prompt([{
        name:"operation",
        message:"please select option",
        type:"list",
        choices:["withdraw","check balance"]
    }]);

console.log(operationAnswer);

if (operationAnswer. operation ==="withdraw" ){
    let amountAnswer = await inquirer.prompt([{
        name:"amount",
        message:"enter your amount",
        type:"number"
    }]);
    console.log(amountAnswer.amount);
    myBalance -= amountAnswer .amount;
    console.log("your remainning balance is:" +  myBalance) 

}else if(operationAnswer .operation === "myBalance"){
    console.log("my balance is:" + myBalance)

}else if(operationAnswer.operation ==="check balance"){
    console.log("your balance in:"  + myBalance) 
}
else{
    console.log("incorrect pin number");
}

    