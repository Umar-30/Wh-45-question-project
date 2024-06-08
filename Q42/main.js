var magicians = ["Jane", "Kipper", "Jack"];
//make function
function show_magician(magicians) {
    magicians.forEach(function (magicians) {
        console.log(magicians);
    });
}
// function call
show_magician(magicians);
// Q 42 
function great_magician(magician) {
    for (var i = 0; i < magicians.length; i++) {
        magicians[i] = "The Great " + magician[i];
    }
}
//modifies the orignal array
great_magician(magicians);
//show modified names
show_magician(magicians);
