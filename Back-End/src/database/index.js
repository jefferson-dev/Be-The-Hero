const knex = require('knex')
const dbConfig = require('../../knexfile')

const connect = knex(dbConfig.development);

module.exports = connect;