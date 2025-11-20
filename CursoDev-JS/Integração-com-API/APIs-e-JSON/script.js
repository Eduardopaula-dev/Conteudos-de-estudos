//Isto é um objeto

const heroObject = {
    name: "Homem de ferro",
    age: 48,
    hasPowers: false
}

console.log(heroObject.name);
console.log(typeof heroObject);

//Isso é um JSON

const heroJson = '{"name": "Hulk", "age": 48, "hasPowers": false}'

//Transforma de json para objeto
const hero = JSON.parse(heroJson)
console.log(hero.name);

//transforma de objeto para string
const heroString = JSON.stringify(hero);
console.log(heroString);
