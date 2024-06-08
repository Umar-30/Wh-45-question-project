//

let currentUser : string[] =["Shagufta","Ambreen","Sambreen","Saba","Admin"];
let newUser :string[] = ["Zakir","Admin","AAmir","Yasir","Tahir","Shagufta"];

newUser.forEach(newUser =>{
    if(currentUser.some(currentUser =>
        currentUser.toLowerCase() ===
        newUser.toLowerCase())){
            console.log(`${newUser},will need to enter a new username.`)
        }
        else{
            console.log(`${newUser},is available.`)
        }
})
