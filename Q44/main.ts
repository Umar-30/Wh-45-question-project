//make a function 
function make_sandwitch(...item: string[]){
    console.log(`Making a sandwich with: ${item.join(' , ')}.`);

}
// call function three time with different item. 
make_sandwitch("ham", "cheese");
make_sandwitch("chicken tikka", "lettuce","tomato","cheese");
make_sandwitch("egg","chicken","ketchup","mayo");