//make array for user name
var userName = ["Admin", "Zoha", "Sana", "zainab", "Abubakkar"];
userName.forEach(function (userName) {
    if (userName == "Admin") {
        console.log("Hello admin, would you like to see a status report ?");
    }
    else {
        console.log("Hello ".concat(userName, ", thamk you for loging again."));
    }
});
