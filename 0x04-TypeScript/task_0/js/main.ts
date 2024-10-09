interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

// Create two students based on the Student interface
const student1: Student = {
  firstName: "John",
  lastName: "Doe",
  age: 21,
  location: "New York"
};

const student2: Student = {
  firstName: "Jane",
  lastName: "Smith",
  age: 22,
  location: "Los Angeles"
};

// Array containing the students
const studentsList: Array<Student> = [student1, student2];

// Create a table using vanilla JavaScript
const table = document.createElement('table');
const tableBody = document.createElement('tbody');

// Create table headers
const headerRow = document.createElement('tr');
const headerFirstName = document.createElement('th');
headerFirstName.textContent = 'First Name';
const headerLocation = document.createElement('th');
headerLocation.textContent = 'Location';
headerRow.appendChild(headerFirstName);
headerRow.appendChild(headerLocation);
tableBody.appendChild(headerRow);

// Add rows to the table for each student
studentsList.forEach((student) => {
  const row = document.createElement('tr');

  const firstNameCell = document.createElement('td');
  firstNameCell.textContent = student.firstName;
  
  const locationCell = document.createElement('td');
  locationCell.textContent = student.location;

  row.appendChild(firstNameCell);
  row.appendChild(locationCell);
  
  tableBody.appendChild(row);
});

// Append the table to the DOM
table.appendChild(tableBody);
document.body.appendChild(table);
