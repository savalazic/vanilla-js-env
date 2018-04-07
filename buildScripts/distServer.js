import express from 'express';
import path from 'path';
import open from 'open';
import compression from 'compression';

const port = 3000;

const app = express();

app.use(compression());
app.use(express.static('dist'));

app.get('/', (req, res) => {
  res.sendFile('index.html', { root: path.join(__dirname, '/dist') });
});

app.get('/users', (req, res) => {
  res.json([
    { id: 1, firstName: 'Bob', lastName: 'Smith', email: 'bob@email.com' },
    { id: 2, firstName: 'Tammy', lastName: 'Norton', email: 'tammy@email.com' },
    { id: 3, firstName: 'Tina', lastName: 'Lee', email: 'tina@email.com' },
  ]);
});

app.listen(port, err => {
  if (err) {
    console.log(err);
  } else {
    open(`http:localhost:${port}`);
  }
});
