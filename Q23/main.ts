let car: string = "subaru";

//Test 1:Equality comparision (true).
console.log("Is car == 'subaru'? I predict true.");
console.log(car == 'subaru');//true

//Test 2:Strict equality comparision (true).
console.log("Is car === 'subaru'? I predict true.");
console.log(car === 'subaru');//true

//Test 3:Inequality comparision (false).
console.log("Is car != 'subaru'? I predict true.");
console.log(car != 'subaru');//false

//Test 4:Strict inequality comparision (false).
console.log("Is car !== 'subaru'? I predict true.");
console.log(car !== 'subaru');//false

//Test 5:Less than comparision (false).
console.log("Is car < 'subaru'? I predict true.");
console.log(car < 'subaru');//false

//Test 6:Grater than comparision (false).
console.log("Is car > 'subaru'? I predict true.");
console.log(car > 'subaru');//false

//Test 7:Less than or equal comparision (true).
console.log("Is car <= 'subaru'? I predict true.");
console.log(car <= 'subaru');//true

//Test 8:grater than or equal comparision (true).
console.log("Is car >= 'subaru'? I predict true.");
console.log(car >= 'subaru');//true

//Test 9:checking truthiness (true).
console.log("Is car ? I predict true.");
console.log(car);//true

//Test 10:checking falseiness (false).
console.log("Is car? I predict false.");
console.log(!car);//false
