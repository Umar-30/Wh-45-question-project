//shrinking the guest list.


let guestList : string[] =["Sara","Zara","Zain","Maira"];
//console.log('Great new ! I found bigger dinner table.');

//add some more guest.

guestList.unshift("Ali","khan");
guestList.splice(guestList.length/1,0,"Shahzen");
guestList.push("Zakir");

//guestList.forEach(guestList =>{
   // console.log(`Dear ,${guestList}, would you like to join us for dinner.`);
//});

console.log("unfortunatelly, I can invite only two person for dinner.");
while(guestList.length>2){
    let removeGuest = guestList.pop();
    console.log(`soory ! Guies,${removeGuest},I can't invited you for dinner.`);
}
guestList.forEach(guestList=>{
    console.log(`Dear ,${guestList}, you are still invited for dinner.`);
});
guestList.splice(0,2);
console.log(guestList);