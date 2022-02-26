//JavaScript Es6 Classes

//Employee
class Employee {
    constructor(name, dept) {
        this.name = name || "";
        this.dept = dept || "general";
    }

    // display() {
    //     console.log("I am in parent class, i.e., employee");
    // }

}

let emD = new Employee();
let emA = new Employee("Arslan", "CS");
console.log(emD);
console.log(emA);



//Manager (derived class of Employee)
class Manager extends Employee {
    constructor(name, dept, reports) {
        super(name, dept);
        this.reports = reports || [];
    }

    // display() {
    //     super.display();
    //     console.log("I am in child class, i.e., manager");
    // }
}

let manD = new Manager();
let manA = new Manager("Dawood", "BBA", [new Employee(), new Employee("Dawood", "BBA")]);
console.log(manD);
console.log(manA);



//WorkerBee (derived class of Employee)
class WorkerBee extends Employee {
    constructor(name, dept, projects) {
        super(name, dept);
        this.projects = projects || [];
    }
}

let wbD = new WorkerBee();
let wbA = new WorkerBee("Zuhaib", "Mathematics", ["ICT", "PF", "OOP"]);
console.log(wbD);
console.log(wbA);



//SalesPerson (derived class of WorkerBee)
class SalesPerson extends WorkerBee {
    constructor(name, dept, projects, quota) {
        super(name, dept, projects);
        this.quota = 100 || quota;
        this.dept = "sales";
    }
}

let spD = new SalesPerson();
let spA = new SalesPerson("Kamran", "Physics", ["Bridge", "Dam"], 120);
console.log(spD);
console.log(spA);



//Engineer (derived class of WorkerBee)
class Engineer extends WorkerBee {
    constructor(name, dept, projects, machine) {
        super(name, dept, projects);
        this.machine = machine || "";
        this.dept = "engineering"
    }
}

let enD = new Engineer();
let enA = new Engineer("Umer", "Chemistry", ["H2So4", "Mehtane"], "Flask")
console.log(enD);
console.log(enA);

//try1