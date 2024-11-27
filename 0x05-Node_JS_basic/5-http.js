const http = require('http');
const url = require('url');
const countStudents = require('./3-read_file_async');

const app = http.createServer(async (req, res) => {
  const parsedUrl = url.parse(req.url, true);

  if (parsedUrl.pathname === '/') {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello Holberton School!');
  } else if (parsedUrl.pathname === '/students') {
    const databasePath = process.argv[2];

    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.write('This is the list of our students\n');

    if (!databasePath) {
      res.end('Cannot load the database\n');
      return;
    }

    try {
      const result = await countStudents(databasePath); // Get data
      res.end(result); // Send data in the response
    } catch (error) {
      res.end(`${error.message}\n`);
    }
  } else {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('Not Found');
  }
});

app.listen(1245);

module.exports = app;
