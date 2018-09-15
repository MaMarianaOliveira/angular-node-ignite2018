//@ts-check
const express = require('express');
const bodyParser = require('body-parser');
const routes = require('./src/routes');
const app = express();
const port = process.env.port || 3000;
const env = process.env.NODE_ENV || 'dev';
const publicweb = './dist';

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

if (env !== 'dev') {
  app.use(express.static(publicweb));
  console.log(`serving ${publicweb}`);
  app.use('/api', routes);
  app.get('*', (req, res) => {
    res.sendFile('index.html', { root: './dist' });
  });
} else {
  app.get('/', (req, res) => {
    res.send('Hello Node.js!\n');
  });
}

app.listen(port, () => console.log(`API running on port ${port} and env ${env}`));
