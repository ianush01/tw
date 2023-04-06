interface MyInterface {
    name: string;
    age: number;
    status: string;
    email?: string;
    address: string;
    phone: string;
}
interface MyExtendedInterface extends MyInterface {
    occupation: string;
    salary: number;
}

const person: MyExtendedInterface = {
    name: "Joh",
    age: 30,
    status: "student",
    address: "123 Main St.",
    phone: "555-555-5555",
    occupation: "Engineer",
    salary: 5000
};

console.log(person);

