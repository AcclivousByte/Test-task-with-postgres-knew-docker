const knex = require("knex");
const knexfile = require("../knexfile");
const dotenv = require("dotenv");
dotenv.config();
const db = knex(knexfile.development);
module.exports = db;
