/* eslint-disable */
import express from 'express';
import path from 'path';
import open from 'open';
import webpack from 'webpack';
import config from '../webpack.config.dev';

const PORT = 3000;
const app = express();
const compiler = webpack(config);

app.use(
  require('webpack-dev-middleware')(compiler, {
    onInfo: true,
    publicPath: config.output.publicPath,
  }),
);

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../src/index.html'));
});

app.get('/users', (req, res) => {
  res.json([
    { id: 1, firstName: 'Bob', lastName: 'Smith', email: 'bob@email.com' },
    { id: 2, firstName: 'Tammy', lastName: 'Norton', email: 'tammy@email.com' },
    { id: 3, firstName: 'Tina', lastName: 'Lee', email: 'tina@email.com' },
  ]);
});

app.listen(PORT, error => {
  if (error) {
    console.log(error);
  } else {
    open('http://localhost:' + PORT);
  }
});
