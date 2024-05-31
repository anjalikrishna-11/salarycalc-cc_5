// Anjali Krishna (U35346496)
// Coding Challenge 5: Employee and Manager Salary Calculation

// Employee class definition
class Employee {
  // Constructor to initialize name and salary properties 
    constructor(name, salary) {
        this.name = name;
        this.salary = salary;
      // Log the name and monthly salary when an Employee object is instantiated
        console.log(`Employee Name: ${this.name}, Monthly Salary: ${this.salary}`);
    }
    // Method to calculate and return the annual salary
    calculateAnnualSalary() {
        return this.salary * 12;
    }
}
