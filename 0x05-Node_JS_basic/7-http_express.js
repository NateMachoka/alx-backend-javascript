const express = require('express');
const fs = require('fs');
const { promisify } = require('util');

// Convert fs.readFile into a promise-based function
const readFileAsync = promisify(fs.readFile);

const app = express();

async function countStudents(path) {
  try {
    const data = await readFileAsync(path, 'utf8');
    const lines = data.split('\n').filter((line) => line.trim() !== '');
    const header = lines.shift();
    if (!header) throw new Error('Invalid CSV header');

    const studentsByField = {};
    for (const line of lines) {
      const student = line.split(',');
      const field = student[3];
      const firstname = student[0];

      if (field && firstname) {
        if (!studentsByField[field]) {
          studentsByField[field] = [];
        }
        studentsByField[field].push(firstname);
      }
    }

    const totalStudents = Object.values(studentsByField).reduce(
      (acc, list) => acc + list.length,
      0,
    );

    let message = `Number of students: ${totalStudents}\n`;
    for (const [field, students] of Object.entries(studentsByField)) {
      message += `Number of students in ${field}: ${students.length}. List: ${students.join(', ')}\n`;
    }

    return message.trim();
  } catch (err) {
    throw new Error('Cannot load the database');
  }
}

// Root route
app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

// Students route
app.get('/students', async (req, res) => {
  const databasePath = process.argv[2];

  if (!databasePath) {
    res.status(500).send('Database path not provided');
    return;
  }

  try {
    const studentInfo = await countStudents(databasePath);
    res.send(`This is the list of our students\n${studentInfo}`);
  } catch (err) {
    res.status(500).send('Cannot load the database');
  }
});

// Listen on port 1245
app.listen(1245, () => {
  console.log('Server listening on port 1245');
});

// Export the app
module.exports = app;
