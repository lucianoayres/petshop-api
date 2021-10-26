import Sequelize from 'sequelize'

// PostgreSQL database URL (test database)
//const databaseUrl = "postgres://ctcjigca:2H6irrl6hkjyIMfl5p9LOFF13z8N9xU2@batyr.db.elephantsql.com/ctcjigca";

// PostgreSQL database URL (desafio database)
const databaseUrl = process.env.POSTGRE_URI

const sequelize = new Sequelize(databaseUrl, {
  dialect: 'postgres',
  define: {
    timestamps: false // supress sequelize default 'createdAt' and 'updatedAt' columns
  }
})

export default sequelize
