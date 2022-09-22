require("dotenv").config();
const { PGUSER, PGPASSWORD, PGDATABASE, PGCLIENT } = process.env;
module.exports = {
  development: {
    client: PGCLIENT,
    connection: {
      database: PGDATABASE,
      user: PGUSER,
      password: PGPASSWORD,
    },
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      directory: __dirname + "/config/migrations",
    },
  },
};
