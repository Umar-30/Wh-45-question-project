// make a function  

function make_shirt(size: string ="large" , message: string ="I love Typescript."){
    console.log(`Making a ${size} t-shirt with the message "${message}" printed on it.`);

}

//default large and message.
make_shirt();

//default message, medium size
make_shirt("medium");

//custom message ,small size 
make_shirt("small","Dive into coding");