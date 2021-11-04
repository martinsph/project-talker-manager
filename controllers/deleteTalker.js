const fs = require('fs').promises;

const dataFile = 'talker.json';

const deleteTalker = async (req, res, _next) => {
    const { id } = req.params;
    
    const readData = await fs.readFile(dataFile);
    const data = JSON.parse(readData);
    const dataIndex = data.findIndex((obj) => obj.id === parseInt(id, 10));
    
    data.splice(dataIndex, 1);
    
    await fs.writeFile(dataFile, JSON.stringify(data));

    return res.status(200).json({ message: 'Pessoa palestrante deletada com sucesso' });
};

module.exports = { deleteTalker };
