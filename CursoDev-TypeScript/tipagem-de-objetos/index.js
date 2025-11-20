function showCustomerInfo(custumer) {
    console.log("O nome do cliente \u00E9: ".concat(custumer.name));
    console.log("A idade do cliente \u00E9: ".concat(custumer.age));
}
showCustomerInfo({ name: "João", age: 11 });
