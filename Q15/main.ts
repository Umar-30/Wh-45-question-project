//changing the guest
let guestList : string[] =["sam","amber","saba","umar","yasir"];
for(let i=0; i<guestList.length; i++){
    console.log("asalam o alaikum ," + guestList[i] + "\n you are invited in my house at dinner.\n");
}
let notAttenedDinner :string ="yasir";
console.log(`${notAttenedDinner}, cannot attened dinner.`);

//replace the guest
let newGuest :string ="tahir";
guestList[guestList.indexOf(notAttenedDinner)] = newGuest;

//new invition
guestList.forEach(guestList =>{
    console.log(`Dear,${guestList}, would you like to join usfor dinner.`);
});
