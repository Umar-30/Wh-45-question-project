//
function make_album(artiestName, albumTitle) {
    return "".concat(artiestName, ",").concat(albumTitle);
}
;
//make veriable
var album1 = make_album("Ahmad jahanzeb", "ishq murshed");
var album2 = make_album("Sahir ALi Bagha", "pakistan zindabad");
var album3 = make_album("Ali Zafar", "channo");
var album4 = make_album("Abrar ul Haq", "Saano tere nal pyar");
console.log(album1);
console.log(album2);
console.log(album3);
console.log(album4);
//make second function number of trac
function make_album2(artiestName, albumTitle, numberOfTrack) {
    return "".concat(artiestName, ",").concat(albumTitle, ",").concat(numberOfTrack);
}
;
//make veriable
var album5 = make_album2("Ahmad jahanzeb", "Kaho ik din", 3);
var album6 = make_album2("Sahir ALi Bagha", "Bharosa pyar tera tera", 12);
var album7 = make_album2("Ali Zafar", "Masti k din hain", 23);
var album8 = make_album2("Abrar ul Haq", "Tere rang rang", 7);
console.log(album5);
console.log(album6);
console.log(album7);
console.log(album8);
