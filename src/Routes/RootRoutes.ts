import express, { Request, Response } from 'express';
import earningPointRoute from './EarningPointRoutes';


const rootRoute = express.Router();

rootRoute.use("/earning-point", earningPointRoute);

export default rootRoute;