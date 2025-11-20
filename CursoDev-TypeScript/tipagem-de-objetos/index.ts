type Custumer = {
    name: string;
    age: number;
}

function showCustomerInfo(custumer : Custumer) {
    console.log(`O nome do cliente é: ${custumer.name}`);
    console.log(`A idade do cliente é: ${custumer.age}`);
}

showCustomerInfo({name: "João", age: 11});