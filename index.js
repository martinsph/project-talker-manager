const express = require('express');
const { getTalkerData } = require('./controllers/talker');
const { getTalkerById } = require('./controllers/talkerbyid');
const { errorHandler } = require('./middlewares/error');
const { postTalkerData } = require('./controllers/createtalker');
const { tokenNumber } = require('./controllers/login');
const { putTalkerData } = require('./controllers/updatetalker');
const { 
  isValidToken, 
  isValidEmail, 
  isValidPassWord, 
  isValidName, 
  isValidAge, 
  isValidTalk,
  isValidWatched,
  isValidRate, 
 } = require('./middlewares/auth');

const app = express();
app.use(express.json());

const HTTP_OK_STATUS = 200;
const PORT = '3000';

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (_request, response) => {
  response.status(HTTP_OK_STATUS).send();
});

app.get('/talker', getTalkerData);
app.get('/talker/:id', getTalkerById);
app.post('/login', isValidEmail, isValidPassWord, tokenNumber);
app.post('/talker', 
isValidToken, isValidName, isValidAge, isValidTalk, isValidWatched, isValidRate, postTalkerData);
app.put('/talker/:id', 
isValidToken, isValidName, isValidAge, isValidTalk, isValidWatched, isValidRate, putTalkerData);

app.use(errorHandler);

app.listen(PORT, () => {
  console.log('Online!');
});
