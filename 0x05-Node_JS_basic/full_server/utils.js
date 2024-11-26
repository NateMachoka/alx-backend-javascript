import fs from 'fs';

export const readDatabase = (filePath) => {
  return new Promise((resolve, reject) => {
    fs.readFile(filePath, 'utf-8', (err, data) => {
      if (err) {
        reject(new Error('Cannot load the database'));
        return;
      }

      const lines = data.split('\n').filter((line) => line.trim() !== '');
      const studentsByField = {};

      for (const line of lines.slice(1)) { // Skip the header
        const [firstname, , , field] = line.split(',');
        if (field && firstname) {
          if (!studentsByField[field]) studentsByField[field] = [];
          studentsByField[field].push(firstname);
        }
      }

      resolve(studentsByField);
    });
  });
};
