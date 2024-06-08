let ordinalNumber: number [] = [1, 2, 3, 4, 5, 6, 7, 8, 9,];

//function fpr loops

ordinalNumber.forEach(ordinalNumber =>{
    let suffix ="th";

    //now we use condition

    if(ordinalNumber === 1){
        suffix = "st";
    }
    else if(ordinalNumber === 2){
        suffix = "nd;"
    }
    else if(ordinalNumber === 3){
        suffix = "rd";
    }
    console.log(`${ordinalNumber}, ${suffix},`);
    });