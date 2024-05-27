abstract class Department {
  static fiscalYear = 2024;
  private id: number;
  name: string;

  private employees: string[] = []; // access modifier

  constructor(id: number, n: string) {
    this.name = n;
    this.id = id;
  }

  describe(this: Department) {
    console.log("Department: " + `${this.id} - ${this.name}`);
  }

  addEmployee(employee: string) {
    this.employees.push(employee);
  }

  printEmployeeInformation() {
    console.log(this.employees.length);
    console.log(this.employees);
  }

  static createEmploye(name: string) {
    return { name: name };
  }
}

class AccountingDepartment extends Department {
  private lastReport: string;

  constructor(id: number, private reports: string[]) {
    super(id, "Accounting");
    this.lastReport = reports[0];
  }

  addEmployee(name: string) {
    if (name == "Jaidev") {
      return;
    }
  }

  getReports() {
    return this.reports;
  }

  get mostReccentReport() {
    return this.lastReport;
  }

  set mostRecentReport(value: string) {
    this.lastReport = value;
  }
}

class ITDepartment extends Department {
  static instance: ITDepartment;
  private constructor(id: number) {
    super(id, "IT");
  }

  static getInstance() {
    if (ITDepartment.instance) {
      return this.instance;
    }
    this.instance = new ITDepartment(2);
    return this.instance;
  }
}

console.log(Department.fiscalYear);
const employee = Department.createEmploye("Jaidev"); // calling staic method

const accounting = new AccountingDepartment(1, ["new report"]);

accounting.addEmployee("Jaidev");
accounting.addEmployee("Lovely");

accounting.describe();

// const accountingCopy = { name: "s", describe: accounting.describe };

// accountingCopy.describe();
