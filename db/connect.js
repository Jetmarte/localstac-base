const { Pool } = require('pg');

const pool = new Pool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  port: parseInt(process.env.DB_PORT, 10)
});
module.exports.connectPostgres = async () => {
  try {
    const client = await pool.connect();
    const result = await client.query('SELECT NOW()');
    client.release();
    return {
      statusCode: 200,
      body: JSON.stringify(result.rows),
      message: 'Success in connecting to postgres database!'
    };
  } catch (err) {
    console.error(err);
    return {
      statusCode: 500,
      body: 'Error connecting to the Database!',
    };
  }
};
