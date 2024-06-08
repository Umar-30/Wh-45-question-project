//
var currentUser = ["Shagufta", "Ambreen", "Sambreen", "Saba", "Admin"];
var newUser = ["Zakir", "Admin", "AAmir", "Yasir", "Tahir", "Shagufta"];
newUser.forEach(function (newUser) {
    if (currentUser.some(function (currentUser) {
        return currentUser.toLowerCase() ===
            newUser.toLowerCase();
    })) {
        console.log("".concat(newUser, ",will need to enter a new username."));
    }
    else {
        console.log("".concat(newUser, ",is available."));
    }
});
