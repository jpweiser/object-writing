const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 3456;
const compression = require('compression');
const helmet = require('helmet');
const request = require('request');
const bodyParser = require('body-parser');

app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({extended: true})); // support encoded bodies

// gzip responses for performance
app.use(compression());

app.use(helmet());
app.use(express.static(path.join(__dirname, 'build')));
app.get('/object/', (req, res, next) => {
  request({
    uri: 'http://roger.redevised.com/api/v1/',
  }).pipe(res);
});
app.get('/*', function(req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(port);
