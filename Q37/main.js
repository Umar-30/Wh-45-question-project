// make a function  
function make_shirt(size, message) {
    if (size === void 0) { size = "large"; }
    if (message === void 0) { message = "I love Typescript."; }
    console.log("Making a ".concat(size, " t-shirt with the message \"").concat(message, "\" printed on it."));
}
//default large and message.
make_shirt();
//default message, medium size
make_shirt("medium");
//custom message ,small size 
make_shirt("small", "Dive into coding");
