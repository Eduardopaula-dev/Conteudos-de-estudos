function makeArray(num) {
    return [num];
}
var numbers = makeArray(12);
console.log(numbers);
var names = makeArray("Ricardo");
//Deixando como generics
function makeArray2(item) {
    return [item];
}
var numbers2 = makeArray2(12);
console.log(numbers2);
var names2 = makeArray2("Ricardo");
console.log(names2);
