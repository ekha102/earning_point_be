
import express, { Request, Response } from 'express';
import connection from '~/Config/config';

const getEarningPointUsers = (req: Request, res: Response) => {
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
}


export {getEarningPointUsers};