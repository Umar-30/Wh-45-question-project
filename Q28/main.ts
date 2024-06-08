let age :number = 2;

//print message the person is baby
if(age < 2){
    console.log("The person is baby.");
}
// print message the person is todder

else if(age >=2 && age < 4 ){
console.log("person is a toddle.")
}
//print message the person is a kid

else if(age >=4  && age < 13 ){
    console.log("person is a kid.")
}
//print message the person is teenager
else if(age >=13 && age < 20 ){
    console.log("person is a teenager.")
 }
 //print message the person is adult.

else if(age >=20 && age < 65 ){
    console.log("person is a adult.")
}

//print message the person is elder

else{
    console.log("person is an elder.")
}