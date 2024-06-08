//changing the guest
var guestList = ["sam", "amber", "saba", "umar", "yasir"];
for (var i = 0; i < guestList.length; i++) {
    console.log("asalam o alaikum ," + guestList[i] + "\n you are invited in my house at dinner.\n");
}
var notAttenedDinner = "yasir";
console.log("".concat(notAttenedDinner, ", cannot attened dinner."));
//replace the guest
var newGuest = "tahir";
guestList[guestList.indexOf(notAttenedDinner)] = newGuest;
//new invition
guestList.forEach(function (guestList) {
    console.log("Dear,".concat(guestList, ", would you like to join usfor dinner."));
});
