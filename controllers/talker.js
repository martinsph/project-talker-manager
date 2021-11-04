const fs = require('fs').promises;

const dataFile = 'talker.json';

const getTalkerData = async (req, res, next) => {
  try {
    const readData = await fs.readFile(dataFile);
    const data = JSON.parse(readData);
    return res.status(200).json(data);
  } catch (err) {
    next(err);
  }
};

module.exports = { getTalkerData };
