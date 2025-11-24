interface ICustumer {
    name: string;
    age: number;
}

interface IAddress {
    stret: string
}

interface ICustumerProfile extends ICustumer, IAddress {
    id: string | number
}

const newProfile: ICustumerProfile = {
    id: 23,
    name: "Ricardo",
    age: 35,
    stret: "São Bernado"
}

type TCustumer = {
    name: string;
    age: number;
}

type TAddrres = {
    stret: string
}

type TCustomerProfile = TCustumer & TAddrres;

const newProfile2: TCustomerProfile = {
    name: "Ricardo", 
    age: 35,
    stret: "São Bernado"
}


