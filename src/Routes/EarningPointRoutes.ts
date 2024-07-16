import express, { Request, Response } from 'express';
import { getEarningPointUsers } from '~/Controllers/earningPointUsersController';


const earningPointRoute = express.Router();

earningPointRoute.get("/get-earning-point", getEarningPointUsers);

export default earningPointRoute;

