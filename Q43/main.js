var magicians = ["Jane", "Jack", "Kipper"];
function make_great(magicians) {
    var greatMagician = [];
    magicians.forEach(function (magicians) { greatMagician.push("".concat(magicians, " the Great.")); });
    return greatMagician;
}
//type annotation is 
//let greet :string = "hello"
//this is type annotation that we define type string the definig of data type called annotation
//create a new modified array
function show_magicians(magicians) {
    magicians.forEach(function (magicians) { return console.log(magicians); });
}
var greatMagician = make_great(magicians.slice());
console.log("Original Magician:");
//show original name
show_magicians(magicians);
console.log("Great magicians:");
//show modified name
show_magicians(greatMagician);
