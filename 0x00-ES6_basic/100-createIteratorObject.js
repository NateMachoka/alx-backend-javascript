export default function createIteratorObject(report) {
  const allEmployees = [];

  // Extract all employees from each department and push them to the allEmployees array
  for (const department in report.allEmployees) {
    allEmployees.push(...report.allEmployees[department]);
  }

  // Return an iterator over the employees array
  return allEmployees[Symbol.iterator]();
}
