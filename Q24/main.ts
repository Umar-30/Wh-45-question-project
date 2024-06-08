//make 3 variable

let train :string = "Shalimaar";
let score :number = 45;
let color :string[] =["Red","blue","Pink"];

//Test:1 equality string comparison
console.log("Testing equality with string:");
console.log(train == 'Shalimaar')//True

//Test:2 inequality string comparison
console.log("Testing inequality with string:");
console.log(train != 'Shalimaar')//False

//test:3 lowercase function comparison 
console.log("Testing with lowercase \n Train is == Shalimaar (True):")
console.log(train.toLowerCase() == 'shalimaar');//True 

console.log("Testing with lowercase \n Train is === shalimaar (False):")
console.log(train === train.toLowerCase());//False

//Test:4 number equality comparison
console.log("Testing number equality \n Is score == 45 ?");
console.log(score == 45);//True

//Test:5 number inequality comparison
console.log("Testing number inequality \n  Is score != 45 ?");
console.log(score != 45);//False

//Test:6 number grater than comparison
console.log("Testing number Grater than \n Is score > 30 ?");
console.log(score > 30);//True

//Test:5 number less than comparison
console.log("Testing number Less than \n Is score < 30 ?");
console.log(score < 30);//False

//Test:6 number grater than or equal comparison
console.log("Number grater than or equal \n Is score >= 30 ?");
console.log(score >= 30);//True

//Test:7 number less than or equal comparison
console.log("Number less than or equal \n Is score <= 30 ?");
console.log(score <= 30);//false

//  ** logical operator

//  test:8 Testing with and operator

console.log("Test with 'And Operator':");
console.log("score is grater than 20 and less than 50:")
console.log(score > 20 && score < 50); //True


// Test:9 Testing with or operator

console.log("Test with 'And Operator':");
console.log("\n score is grater than 60 or less than 30:")
console.log(score > 60 || score < 30);//False

//Test:10 an item is in an array
console.log("Is Red in color?")
console.log('Red' in color);//True

//Test:11 an item is not an array
console.log("Is color Green in array:")
console.log;("Green" in color);//False

//It is difficult task