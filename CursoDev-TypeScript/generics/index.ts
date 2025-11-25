function makeArray(num: number) : number[] {
    return [num]
}

const numbers = makeArray(12);
console.log(numbers);

const names = makeArray("Ricardo")

//Deixando como generics

function makeArray2<T>(item: T) : T[] {
    return [item]
}

const numbers2 = makeArray2(12);
console.log(numbers2);

const names2 = makeArray2("Ricardo");
console.log(names2);
