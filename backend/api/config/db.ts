import dotenv from 'dotenv';
import sql from 'mssql';

dotenv.config();

const config: sql.config = {
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  server: process.env.DB_SERVER!,
  database: process.env.DB_NAME,
  options: {
    encrypt: false,
    trustServerCertificate: true,
  },
};

export const db = new sql.ConnectionPool(config)
  .connect()
  .then(pool => {
    console.log('✔ Conexión a SQL Server exitosa');
    return pool;
  })
  .catch(err => {
    console.error('❌ Error en la conexión a SQL Server', err);
    throw err;
  });
