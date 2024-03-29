require('dotenv').config();
import express from "express";
import { Request, Response, NextFunction } from "express";
import cors from "cors";
import routes from './routes';
import { errors } from 'celebrate';
import swaggerUi from 'swagger-ui-express';

import swaggerDocs from "./swagger.json";

const app = express();

const corsOptions = {
    exposedHeaders: ['X-Total-Count', 'message', 'Date-Of-Creation'],
  };


app.use(express.json());
app.use(cors());

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs))

app.use(routes);

app.use(errors());

//token expired or without token
app.use((req: Request, res: Response, next: NextFunction) => {
    const error = new Error('Token expirado ou inexistente')
    res.status(401);
    next(error)
})

//Not Found
app.use((req: Request, res: Response, next: NextFunction) => {
    const error = new Error('Não encontrado')
    res.status(404);
    next(error);
})

app.use((error: any, req: Request, res: Response, next: NextFunction) => {
    res.status(error.status || 500)
    res.json({ error: error.message })
})

export { app }