require('dotenv').config()

module.exports = {
  development: {
    database: "dndbot_development",
    dialect: "postgres"
  },
  test: {
    database: "dndbot_test",
    dialect: "postgres"
  },
  production: {
    use_env_variable: 'DATABASE_URL',
    dialect: "postgres",
    dialectOptions : {
      ssl: {
        rejectUnauthorized: false,
        require: true
      }
    }
  }
}
