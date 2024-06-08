// mMake a function 
function describe_city(nameOfCity, message) {
    if (message === void 0) { message = " pakistan."; }
    return "".concat(nameOfCity, " is in ").concat(message);
}
;
//Make variable  4 cities name 
var city1 = describe_city('Karachi');
var city2 = describe_city('Islamabad');
var city3 = describe_city('Murree');
var city4 = describe_city('Lahore');
var city5 = describe_city("Dubai", "UAE.");
// call the function
console.log(city1);
console.log(city2);
console.log(city3);
console.log(city4);
console.log(city5);
