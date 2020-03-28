const connect = require('../database')

module.exports = {
  async create(req,res) {
    const { id } = req.body;

    const ong = await connect('ongs').where('id', id).select('name').first();

    if (!ong) {
      return res.status(400).json({ error: 'Não existe ONG com este ID'});
    }

    return res.json(ong);
  }
}