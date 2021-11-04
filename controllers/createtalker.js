const fs = require('fs').promises;

const dataFile = 'talker.json';

const postTalkerData = async (req, res, _next) => {
    const { name, age, talk: { watchedAt, rate } } = req.body;
    
    const readData = await fs.readFile(dataFile);
    const data = JSON.parse(readData);
    
    const newData = { id: data.length + 1, name, age, talk: { watchedAt, rate } };
    await fs.writeFile(dataFile, JSON.stringify([...data, newData]));

    return res.status(201).json(newData);
};

module.exports = { postTalkerData };
