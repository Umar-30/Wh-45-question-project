//more guest invitation for dinner.
var guestList = ["Sara", "Zara", "Zain", "Maira"];
console.log('Great new ! I found bigger dinner table.');
//add some more guest.
guestList.unshift("Ali", "khan");
guestList.splice(guestList.length / 1, 0, "Shahzen");
guestList.push("Zakir");
guestList.forEach(function (guestList) {
    console.log("Dear ,".concat(guestList, ", would you like to join us for dinner."));
});
