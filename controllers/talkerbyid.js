const fs = require('fs').promises;

const dataFile = 'talker.json';

const getTalkerById = async (req, res, _next) => {
  const { id } = req.params;
  
  const readData = await fs.readFile(dataFile);
  const data = JSON.parse(readData);
  const result = data.find((obj) => obj.id === parseInt(id, 10));
  if (!result) {
    return res.status(404).json({ message: 'Pessoa palestrante não encontrada' });
  }

  res.status(200).json(result);
};

module.exports = { getTalkerById };
