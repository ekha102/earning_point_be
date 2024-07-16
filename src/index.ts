import express, { Request, Response } from 'express';
import cors from 'cors';
import mysql from 'mysql2';


const app:any = express();


app.use(express.json());
app.listen(8080);

app.use(cors({
  origin: '*' 
}));

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "12345",
  port: 3307,
  database: "earning_point"
});


app.get("/demo", (req: Request, res: Response) => {
  const sql = `
    SELECT  u.first_name, SUM(j.job_point)
    FROM earn_points e 
    INNER JOIN users u 
      ON e.user_id = u.user_id
    INNER JOIN jobs j
      ON e.job_id = j.job_id
    GROUP BY u.first_name `;
  //Đồng bộ: 
  connection.query(sql, (error, data) => {
    res.send(data);
  });
})












// This datatype of req ad res build-in express
// app.get("/demo", (req: Request, res: Response) =>{
//   res.send("Testing");
// });



