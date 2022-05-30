import { Router } from "express";
import { IndexCultureFactory } from "../modules/Culture/IndexCulture/IndexCultureFactory";

const routes = Router();
const auth = require('../middleware/auth');

//CRUD

routes.get('/culture', auth, (request, response, next) =>
IndexCultureFactory().handle(request, response, next)
);



export default routes;