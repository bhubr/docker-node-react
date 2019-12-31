// yarn add express body-parser cookie-parser morgan cors
// yarn add --dev nodemon
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const morgan = require('morgan');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(cors());
app.use(morgan('dev'));

app.get('/api', (req, res) => {
  res.json({ message: 'Hello API' });
});

const port = process.env.APP_SERVER_PORT || 5000;
app.listen(port, err => {
  if (err) {
    console.error(err);
  } else {
    console.log(`Listening on ${port}`);
  }
});
