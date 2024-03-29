import { Router } from "express";
import { CreateUserFactory } from "../modules/User/CreateUser/CreateUserFactory";
import { IndexUserFactory } from "../modules/User/IndexUser/IndexUserFactory";
import { LoginFactory } from "../modules/Auth/Login/LoginFactory";

const routes = Router();
const auth = require('../middleware/auth');

//CRUD

routes.post('/login', (request, response, next) =>
LoginFactory().handle(request, response, next)
);

routes.post('/user', (request, response, next) =>
CreateUserFactory().handle(request, response, next)
);

routes.get('/user', auth, (request, response, next) =>
IndexUserFactory().handle(request, response, next)
);

export default routes;