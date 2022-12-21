console.log("Home Work ")


//Homework 1
//Return typeof
function parameterItems (parameter){
    let typeOfParameter = typeof parameter;
    return typeOfParameter;
}

let resultOne = parameterItems("Hello");
console.log(resultOne);

let resultTwo = parameterItems(100);
console.log(resultTwo);

let resultThree = parameterItems(true);
console.log(resultThree);

let resultFour = parameterItems(null);
console.log(resultFour);

let resultFive = parameterItems(undefined);
console.log(resultFive);

//Homework 2
//Converting dog's age in human years

function dogInHumansAge(){
    let dog = 4;
    let dogYears = 7 * dog;
    return dogYears;
}
let total = dogInHumansAge()
console.log(`My 2 years old dog is ${total} in human years.`);
//Converting my age in dog's years

function myAgeInDogs(){
    let myAge = 30;
    let myAgeInDog = myAge / 7;
    return myAgeInDog
}
let myAgeInDogsAge = myAgeInDogs();
console.log(`I'am 30 years old, that is equal to ${myAgeInDogsAge} in dog years.`);


//Homework number 3 
//ATM

let balance = 1250;
function atm(cash){
    
    let enteredCash =prompt( Number(cash));
    if (isNaN(enteredCash)){
        alert("Please enter a number")
    }
    else if (enteredCash > balance){
        alert("Not enought money")
    }else if(enteredCash < balance) {
        balance = balance - enteredCash
        alert(`You withdrawn ${enteredCash}$ and you left ${balance}$ on your account`)
    }
   
}

atm();