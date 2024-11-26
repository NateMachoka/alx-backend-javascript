//task 2
interface Teacher {
  firstName: string;
  lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  location: string;
  [key: string]: any; // Allows additional properties
}

// Creating an instance of Teacher
const teacher1: Teacher = {
  firstName: 'Jane',
  lastName: 'Smith',
  fullTimeEmployee: true,
  location: 'New York',
};

const teacher2: Teacher = {
  firstName: 'John',
  lastName: 'Doe',
  fullTimeEmployee: false,
  location: 'London',
  contract: false, // Adding additional property
};

// Log the teacher objects
console.log(teacher1);
console.log(teacher2);

// task 3
interface printTeacherFunction {
  (firstName: string, lastName: string): string;
}

const printTeacher: printTeacherFunction = (firstName: string, lastName: string): string => {
  return `${firstName.charAt(0)}. ${lastName}`;
};

console.log(printTeacher("Michael", "Johnson"));
console.log(printTeacher("Amelia", "Clarkson"));


//task 4
interface StudentClassConstructor {
  firstName: string;
  lastName: string;
}

interface StudentClassInterface {
  workOnHomework(): string;
  displayName(): string;
}

class StudentClass implements StudentClassInterface {
  firstName: string;
  lastName: string;

  constructor(firstName: string, lastName: string) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  workOnHomework(): string {
    return 'Currently working';
  }
  
  displayName(): string {
    return this.firstName;
  }
}

const student1 = new StudentClass('Alice', 'Johnson');

console.log(student1.workOnHomework());
console.log(student1.displayName());
