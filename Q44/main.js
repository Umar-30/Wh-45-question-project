function make_sandwitch() {
    var item = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        item[_i] = arguments[_i];
    }
    console.log("Making a sandwich with: ".concat(item.join(' ,'), "."));
}
// call function three time with different item. 
make_sandwitch("ham", "cheese");
make_sandwitch("chicken tikka", "lettuce", "tomato", "cheese");
make_sandwitch("egg", "chicken", "ketchup", "mayo");
