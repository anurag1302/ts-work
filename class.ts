class Employee {
    //either write ! after the properties or init them in a constructor
    id: number;
    name: string;
    dob: Date

    //constructor
    constructor(id: number, name: string, dob: Date) {
        this.id = id;
        this.name = name;
        this.dob = dob
    }

    //methods
    concatIdAndName() {
        return `${this.name} ID is ${this.id}`;
    }
}

class Manager extends Employee {
    department: string;
    address: string;

    constructor(id: number, name: string, dob: Date, dept: string, address: string) {
        super(id, name, dob);
        this.department = dept;
        this.address = address;
    }

    getDetails()
    {
        return `${this.name} is a manager, whose ID is ${this.id}, his department is ${this.department}`;
    }
}

let emp1 = new Employee(1, 'Anurag', new Date());

let man1 = new Manager(101, 'John', new Date(), 'IT', 'Delhi');

console.log(emp1)

console.log(emp1.concatIdAndName())

console.log(man1)

console.log(man1.concatIdAndName())

console.log(man1.getDetails())