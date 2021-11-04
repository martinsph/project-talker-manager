const fs = require('fs').promises;

const dataFile = 'talker.json';

const postTalkerData = async (req, res, next) => {
  try {
    const readData = await fs.readFile(dataFile);
    const data = JSON.parse(readData);
    
    const { name, age, talk: { watchedAt, rate } } = req.body;
    const newData = { id: data.length + 1, name, age, talk: { watchedAt, rate } };

    await fs.writeFile(dataFile, JSON.stringify([...data, newData]));

    return res.status(201).json(newData);
  } catch (err) {
    next(err);
  }
};

module.exports = { postTalkerData };