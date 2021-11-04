const fs = require('fs').promises;

const dataFile = 'talker.json';

const putTalkerData = async (req, res, _next) => {
    const { name, age, talk: { watchedAt, rate } } = req.body;
    const { id } = req.params;
    
    const readData = await fs.readFile(dataFile);
    const data = JSON.parse(readData);
    const dataIndex = data.findIndex((obj) => obj.id === parseInt(id, 10));
    
    data[dataIndex] = { ...data[dataIndex], name, age, talk: { watchedAt, rate } };
    
    await fs.writeFile(dataFile, JSON.stringify(data));

    return res.status(200).json(data[dataIndex]);
};

module.exports = { putTalkerData };
