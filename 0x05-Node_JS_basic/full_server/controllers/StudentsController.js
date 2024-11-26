import { readDatabase } from '../utils.js';

class StudentsController {
  static async getAllStudents(req, res) {
    const databaseFile = process.argv[2];
    if (!databaseFile) {
      res.status(500).send('Cannot load the database');
      return;
    }

    try {
      const studentsByField = await readDatabase(databaseFile);
      const sortedFields = Object.keys(studentsByField).sort((a, b) =>
        a.toLowerCase().localeCompare(b.toLowerCase())
      );

      let responseText = 'This is the list of our students\n';
      for (const field of sortedFields) {
        const students = studentsByField[field];
        responseText += `Number of students in ${field}: ${students.length}. List: ${students.join(', ')}\n`;
      }

      res.status(200).send(responseText.trim());
    } catch (err) {
      res.status(500).send(err.message);
    }
  }

  static async getAllStudentsByMajor(req, res) {
    const databaseFile = process.argv[2];
    const { major } = req.params;

    if (!['CS', 'SWE'].includes(major)) {
      res.status(500).send('Major parameter must be CS or SWE');
      return;
    }

    try {
      const studentsByField = await readDatabase(databaseFile);
      const students = studentsByField[major] || [];
      res.status(200).send(`List: ${students.join(', ')}`);
    } catch (err) {
      res.status(500).send(err.message);
    }
  }
}

export default StudentsController;
