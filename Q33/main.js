var ordinalNumber = [1, 2, 3, 4, 5, 6, 7, 8, 9,];
ordinalNumber.forEach(function (ordinalNumber) {
    var suffix = "th";
    if (ordinalNumber === 1) {
        suffix = "st";
    }
    else if (ordinalNumber === 2) {
        suffix = "nd;";
    }
    else if (ordinalNumber === 3) {
        suffix = "rd";
    }
    console.log("".concat(ordinalNumber, ", ").concat(suffix, ","));
});
