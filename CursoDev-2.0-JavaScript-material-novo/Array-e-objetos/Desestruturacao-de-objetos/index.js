// Destruturação de objetos

const user = {
    name: 'Alice',
    age: 30,
    address: {
        street: "Rua das Flores",
        number: 123
    }
};

const { 
    name, 
    age, 
    phone = '999999999',
    address: { street, number } 
} = user

console.log(name, age, street, number); 

//Forma tradicional
const showAge = (user) => {
    console.log(user.age);
}

showAge(user);

//Com destruturação
const showAgeDestructured = ({ name }) => {
    console.log(name);
}

showAgeDestructured(user);