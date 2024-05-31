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
// Manager class definition, inheriting from Employee
class Manager extends Employee {
  // Constructor to initialize name, salary, and department properties
    constructor(name, salary, department) {
        super(name, salary); // Call the parent class constructor 
        this.department = department;
    }
    // Method to calculate the annual salary including a 15% bonus
    calculateAnnualSalary() {
        const baseAnnualSalary = super.calculateAnnualSalary(); // Get the base annual salary
        const bonus = baseAnnualSalary * 0.15; // Calculate the 15% bonus
        const totalAnnualSalary = baseAnnualSalary + bonus; // Calculate the total salary including the bonus
      
        // Log the manager details, including the bonus and total annual salary
        console.log(`Manager: ${this.name}, Department: ${this.department}`);
        console.log(`Annual Salary (before bonus): $${baseAnnualSalary}`);
        console.log(`Bonus: $${bonus}`);
        console.log(`Total Annual Salary (including bonus): $${totalAnnualSalary}\n`);
        return totalAnnualSalary;
    }
}
