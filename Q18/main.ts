// make arrey (places I like to visited).

//original order
let places : string[] =["Murree","Japan","Norway","Italy","switzerland"];
console.log("original order:",places);

//Alphabetical order
console.log("Alphabetical order:",[...places].sort());

//Show list in original order.
console.log("Original order:",places);

//Reverse  alphabetical order without changing order of original list.
console.log("Reverse alphabetical order:",[...places].sort().reverse());

//  still original order by priting it again.
console.log("Original order:",places);

//Reverse order list that its orderhs changed.
 places.reverse();
 console.log("Reversed order:",places);

//Reverse order list again.print the list to show back to its original order.
places.reverse();
console.log("Original order:",places);

//sort arrey in alphabetical order and order has been changed.
places.sort();
console.log("Alphabeticial order:",places);

//
places.reverse();
console.log("Reverse alphabetical order:",places);