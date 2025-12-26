require("dotenv").config();

module.exports = {
  dialect: "mariadb",
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  username: process.env.MARIADB_USER,
  password: process.env.MARIADB_PASSWORD,
  database: process.env.MARIADB_DATABASE,
  define: {
    timestamps: true,
    underscored: true,
    underscoredAll: true,
  },
  dialectOptions: {
    timezone: process.env.DB_TIMEZONE,
  },
  timezone: process.env.DB_TIMEZONE,
};
