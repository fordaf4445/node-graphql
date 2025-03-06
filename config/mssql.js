const { Sequelize } = require('sequelize');

const sequelize = new Sequelize(process.env.MSSQL_DB, process.env.MSSQL_USER, process.env.MSSQL_PASSWORD,{
    dialect: 'mssql',
    host: process.env.MSSQL_HOST,
    port: process.env.MSSQL_PORT,
    dialectOptions: {
        Option: {
            encrypt: true,   // สำคัญสำหรับ Azure SQL
            trustServerCertificate: true // ใช้ true ถ้าเป็น Local
        }
    }
});

sequelize.authenticate()
.then(() => console.log("✅ Connected to SQL Server"))
.catch(err => console.log("❌ SQL Server connection error:", err))

module.exports = sequelize;
