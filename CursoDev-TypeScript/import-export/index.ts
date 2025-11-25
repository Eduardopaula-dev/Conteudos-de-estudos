import { paginationPerPage, Customer } from "./customer";

interface SpecialCustomer extends Customer {
    couponQunatity: number
}

const specialCustomer: SpecialCustomer = {
    couponQunatity: 10,
    name: "Maria",
    age: 46
}