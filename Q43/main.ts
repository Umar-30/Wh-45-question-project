let magicians : string[] = ["Jane","Jack","Kipper"];

function make_great(magicians: string[]): string[] {
    let greatMagician:string[] = [];
    magicians.forEach(magicians =>
    {    greatMagician.push(`${magicians} the Great.`)});
    return greatMagician;
}

//create a new modified array
function show_magicians(magicians :string[]){
    magicians.forEach(magicians=>console.log(magicians))
}
let greatMagician = make_great(magicians.slice());
console.log("Original Magician:");

//show original name
 show_magicians(magicians);
 console.log("Great magicians:");

 //show modified name
  show_magicians(greatMagician);

