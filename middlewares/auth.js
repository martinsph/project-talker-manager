const isValidToken = (req, res, next) => {
  const { authorization } = req.headers;
  if (!authorization) {
    return res.status(401).json({ message: 'Token não encontrado' });
  }

  if (authorization.lenght !== 16) {
    return res.status(401).json({ message: 'Token inválido' });
  }
  return next();
};

const isValidEmail = (req, res, next) => {
  const regex = /\S+@\S+\.\S+/;
  const { email } = req.body;
  if (!email) {
    return res.status(400).json({ message: 'O campo "email" é obrigatório' });
  }
  if (!regex.test(email)) {
    return res.status(400).json({ message: 'O "email" deve ter o formato "email@email.com"' });
  }
  return next();
};

const isValidPassWord = (req, res, next) => {
  const { password } = req.body;
  if (!password) {
    return res.status(400).json({ message: 'O campo "password" é obrigatório' });
  } 
  if (password.length < 6) { 
    return res.status(400).json({ message: 'O "password" deve ter pelo menos 6 caracteres' }); 
  }
  next();
};

const isValidName = (req, res, next) => {
  const { name } = req.body;
  if (!name) return res.status(400).json({ message: 'O campo "name" é obrigatório' }); 
  if (name.length < 3) { 
    return res.status(400).json({ message: 'O "name" deve ter pelo menos 3 caracteres' });
  }
  next();
};

const isValidAge = (req, res, next) => {
  const { age } = req.body;
  if (!age) return res.status(400).json({ message: 'O campo "age" é obrigatório' }); 
  if (age < 18) { 
    return res.status(400).json({ message: 'A pessoa palestrante deve ser maior de idade' });
  }
  next();
};

const isValidTalk = (req, res, next) => {
  const { talk } = req.body;
  const { watchedAt, rate } = talk;
  if (!talk || !watchedAt || !rate) {
    return res.status(400).json({ message: 
      'O campo "talk" é obrigatório e "watchedAt" e "rate" não podem ser vazios' });
  }
  next();
};

const checktalk = (req, res, next) => {
  const { talk } = req.body;
  const { watchedAt, rate } = talk;
  const regex = /^(\d{1,2})\/(\d{1,2})\/(\d{4})$/;
  if (!regex.test(watchedAt)) {
    return res.status(400).json({ message: 'O campo "watchedAt" deve ter o formato "dd/mm/aaaa"' });
  }
  if (rate < 1 || rate > 5) {
    return res.status(400).json({ message: 'O campo "rate" deve ser um inteiro de 1 à 5' });
  }
  next();
};

// const isValidRate = (req, res, next) => {
//   const { talk } = req.body;
//   const { rate } = talk;
//   if (rate < 1 || rate > 5) {
//     return res.status(400).json({ message: 'O campo "rate" deve ser um inteiro de 1 à 5' });
//   }
//   next();
// };

module.exports = { 
  isValidToken, 
  isValidEmail, 
  isValidPassWord, 
  isValidName, 
  isValidAge, 
  isValidTalk, 
  checktalk,
};
