import mysql from 'mysql2';

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "12345",
  port: 3307,
  database: "earning_point"
});

export default connection;