// make function

function make_car(manufacturer: string, modle: string, ...option:[string,any][]): Object{
    let car ={manufacturer , modle};
    option.forEach(([key , value]) =>
    car[key] = value );
    return car;
}
console.log(make_car("Toyota","Carolla",["color","red"],["year",2024]));
console.log(make_car("Suzuki","Yaris",["color","black"],["sunroof",true]));
