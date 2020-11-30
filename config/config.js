require('dotenv').config()

module.exports={
  development: {
    username: process.env.DBUSER,
    password: process.env.DBPASSWORD,
    database: process.env.DATABASE,
    host: process.env.DBHOST,
    port: process.env.DBPORT || 3306,
    dialect: mysql
  },
  test: {
    username: process.env.DBUSER,
    password: process.env.DBPASSWORD,
    database: process.env.DATABASE,
    host: process.env.DBHOST,
    port: process.env.DBPORT || 3306,
    dialect: mysql
  },
  production: {
    use_env_variable: JAWSDB_URL
  }
}