export default function createIteratorObject(report) {
  const employees = [];

  // Gather all employees from each department
  for (const department in report.allEmployees) {
    employees.push(...report.allEmployees[department]);
  }

  // Create an iterator for the employees array
  return employees[Symbol.iterator]();
}
