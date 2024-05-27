class Department {
  private id: number;
  name: string;

  private employees: string[] = []; // access modifier

  constructor(id: number, n: string) {
    this.name = n;
    this.id = id;
  }

  describe(this: Department) {
    console.log("Department: " + this.name);
  }

  addEmployee(employee: string) {
    this.employees.push(employee);
  }

  printEmployeeInformation() {
    console.log(this.employees.length);
    console.log(this.employees);
  }
}

const accounting = new Department(1, "Accounting");

accounting.addEmployee("Jaidev");
accounting.addEmployee("Lovely");

accounting.describe();

// const accountingCopy = { name: "s", describe: accounting.describe };

// accountingCopy.describe();
