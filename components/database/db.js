import Sequelize from 'sequelize'

// PostgreSQL database URL
const databaseUrl = process.env.POSTGRE_URI

const sequelize = new Sequelize(databaseUrl, {
  dialect: 'postgres',
  define: {
    timestamps: false // supress sequelize default 'createdAt' and 'updatedAt' columns
  }
})

export default sequelize
