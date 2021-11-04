const express = require('express');
const bodyParser = require('body-parser');
const { getTalkerData } = require('./controllers/talker');
const { getTalkerById } = require('./controllers/talkerbyid');
const { errorHandler } = require('./middlewares/error');

const app = express();
app.use(bodyParser.json());

const HTTP_OK_STATUS = 200;
const PORT = '3000';

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (_request, response) => {
  response.status(HTTP_OK_STATUS).send();
});

app.get('/talker', getTalkerData);
app.get('/talker/:id', getTalkerById);
app.use(errorHandler);

app.listen(PORT, () => {
  console.log('Online!');
});
