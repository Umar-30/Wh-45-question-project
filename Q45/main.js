// make function
function make_car(manufacturer, modle) {
    var option = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        option[_i - 2] = arguments[_i];
    }
    var car = { manufacturer: manufacturer, modle: modle };
    option.forEach(function (_a) {
        var key = _a[0], value = _a[1];
        return car[key] = value;
    });
    return car;
}
console.log(make_car("Toyota", "Carolla", ["color", "red"], ["year", 2024]));
console.log(make_car("Suzuki", "Yaris", ["color", "black"], ["sunroof", true]));
