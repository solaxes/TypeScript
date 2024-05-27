"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Department = (function () {
    function Department(id, n) {
        this.employees = [];
        this.name = n;
        this.id = id;
    }
    Department.prototype.describe = function () {
        console.log("Department: " + "".concat(this.id, " - ").concat(this.name));
    };
    Department.prototype.addEmployee = function (employee) {
        this.employees.push(employee);
    };
    Department.prototype.printEmployeeInformation = function () {
        console.log(this.employees.length);
        console.log(this.employees);
    };
    Department.createEmploye = function (name) {
        return { name: name };
    };
    Department.fiscalYear = 2024;
    return Department;
}());
var AccountingDepartment = (function (_super) {
    __extends(AccountingDepartment, _super);
    function AccountingDepartment(id, reports) {
        var _this = _super.call(this, id, "Accounting") || this;
        _this.reports = reports;
        _this.lastReport = reports[0];
        return _this;
    }
    AccountingDepartment.prototype.addEmployee = function (name) {
        if (name == "Jaidev") {
            return;
        }
    };
    AccountingDepartment.prototype.getReports = function () {
        return this.reports;
    };
    Object.defineProperty(AccountingDepartment.prototype, "mostReccentReport", {
        get: function () {
            return this.lastReport;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AccountingDepartment.prototype, "mostRecentReport", {
        set: function (value) {
            this.lastReport = value;
        },
        enumerable: false,
        configurable: true
    });
    return AccountingDepartment;
}(Department));
var ITDepartment = (function (_super) {
    __extends(ITDepartment, _super);
    function ITDepartment(id) {
        return _super.call(this, id, "IT") || this;
    }
    ITDepartment.getInstance = function () {
        if (ITDepartment.instance) {
            return this.instance;
        }
        this.instance = new ITDepartment(2);
        return this.instance;
    };
    return ITDepartment;
}(Department));
console.log(Department.fiscalYear);
var employee = Department.createEmploye("Jaidev");
var accounting = new AccountingDepartment(1, ["new report"]);
accounting.addEmployee("Jaidev");
accounting.addEmployee("Lovely");
accounting.describe();
//# sourceMappingURL=app.js.map