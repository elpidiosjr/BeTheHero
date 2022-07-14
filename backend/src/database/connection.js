const knex = require('knex');
const configuration = require('../../knexfile');

const coonection = knex(configuration.development);

module.exports = connection;