//make array for user name
let userName :string[] =["Admin","Zoha","Sana","zainab","Abubakkar"]

//looping and conditional logic together.

userName.forEach(userName => {
    if(userName == "Admin"){
        console.log("Hello admin, would you like to see a status report ?");
    }else{
        console.log(`Hello ${userName}, thank you for loging again.`);
    }
});

