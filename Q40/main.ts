//

function make_album(artiestName: string ,albumTitle: string){
    return`${artiestName},${albumTitle}`
};

//make veriable
 
let album1 = make_album("Ahmad jahanzeb", "ishq murshed");
let album2 = make_album("Sahir ALi Bagha", "pakistan zindabad");
let album3 = make_album("Ali Zafar", "channo");
let album4 = make_album("Abrar ul Haq", "Saano tere nal pyar");

console.log(album1);
console.log(album2);
console.log(album3);
console.log(album4);

//make second function number of trac

function make_album2(artiestName: string , albumTitle: string , numberOfTrack: number){
    return`${artiestName},${albumTitle},${numberOfTrack}`
};

//make veriable
 
let album5 = make_album2("Ahmad jahanzeb", "Kaho ik din",3);
let album6 = make_album2("Sahir ALi Bagha", "Bharosa pyar tera tera",12);
let album7 = make_album2("Ali Zafar", "Masti k din hain",23);
let album8 = make_album2("Abrar ul Haq", "Tere rang rang",7);

console.log(album5);
console.log(album6);
console.log(album7);
console.log(album8);
