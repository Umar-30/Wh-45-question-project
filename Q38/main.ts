// mMake a function 

function describe_city(nameOfCity: string , country: string =" pakistan."){
    return`${nameOfCity} is in ${country}`;
};
//Make variable  4 cities name 

let city1 = describe_city('Karachi');
let city2 = describe_city('Islamabad');
let city3 = describe_city('Murree');
let city4 = describe_city('Lahore');
let city5 = describe_city("Dubai" , "UAE.");

// call the function

console.log(city1);
console.log(city2);
console.log(city3);
console.log(city4);
console.log(city5);

