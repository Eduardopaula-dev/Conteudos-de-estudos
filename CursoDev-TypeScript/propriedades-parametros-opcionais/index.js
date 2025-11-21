var newCustumer = {
    firstName: "João",
    lastName: "Nascimento",
    age: 29
};
console.log(newCustumer);
var newCustumer2 = {
    firstName: "João",
    age: 29
};
console.log(newCustumer2);
//Tbm o parametro opcional é passado para função
function printName(firstName, lastName) {
    console.log("O primeiro nome \u00E9: ".concat(firstName));
}
;
printName("João");
