const fs = require('fs').promises;

/**
 * Counts the number of students asynchronously
 * @param {string} filePath File path
 * @returns {Promise<string>} Formatted student data
 */
async function countStudents(filePath) {
  try {
    const data = await fs.readFile(filePath, 'utf8');
    const lines = data.split('\n').filter((line) => line.trim() !== '');
    if (lines.length < 2) {
      throw new Error('Cannot load the database');
    }

    // Remove the header row
    lines.shift();

    const students = lines
      .map((line) => line.split(','))
      .filter((fields) => fields.length === 4);

    const fieldMap = {};
    students.forEach((student) => {
      const field = student[3];
      const firstName = student[0];
      if (!fieldMap[field]) {
        fieldMap[field] = [];
      }
      fieldMap[field].push(firstName);
    });

    // Prepare output
    let output = `Number of students: ${students.length}`;
    for (const [field, names] of Object.entries(fieldMap)) {
      output += `\nNumber of students in ${field}: ${names.length}. List: ${names.join(', ')}`;
    }

    return output;
  } catch (error) {
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;
