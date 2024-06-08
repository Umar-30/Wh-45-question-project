
//Make an  empty array
let userName: string[] = ["Sana","Saba","Shan","Zara","Admin"];

//This method  teach you to handle empty array

if(userName.length === 0 ){
    console.log("We need to find some user!");
}
else{
    userName = [];
    console.log("All user have been removed " + userName.length)
}
