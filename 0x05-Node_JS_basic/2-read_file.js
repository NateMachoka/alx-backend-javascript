const fs = require('fs');

/**
 * Counts the number of students
 * @param {string} filePath File path
 */
function countStudents(filePath) {
  try {
    const data = fs.readFileSync(filePath, 'utf8');
    const lines = data.split('\n').filter((line) => line.trim() !== '');
    if (lines.length < 2) {
      throw new Error('Cannot load the database');
    }
    // Remove the header row
    lines.shift();

    const students = lines
      .map((line) => line.split(','))
      .filter((fields) => fields.length === 4);

    console.log(`Number of students: ${students.length}`);

    // Count and list students by field
    const fieldMap = {};
    students.forEach((student) => {
      const field = student[3];
      const firstName = student[0];
      if (!fieldMap[field]) {
        fieldMap[field] = [];
      }
      fieldMap[field].push(firstName);
    });

    // Log the results
    for (const [field, names] of Object.entries(fieldMap)) {
      console.log(
        `Number of students in ${field}: ${names.length}. List: ${names.join(', ')}`,
      );
    }
  } catch (error) {
    console.error('Cannot load the database');
  }
}

module.exports = countStudents;
