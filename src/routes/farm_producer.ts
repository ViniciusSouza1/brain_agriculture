import { Router } from "express";
import { CreateFarm_producerFactory } from "../modules/Farm_producer/CreateFarm_producer/CreateFarm_producerFactory";
import { deleteFarm_producerFactory } from "../modules/Farm_producer/DeleteFarm_producer/DeleteFarm_producerFactory";
import { IndexFarm_producerFactory } from "../modules/Farm_producer/IndexFarm_producer/IndexFarm_producerFactory";
import { UpdateFarm_producerFactory } from "../modules/Farm_producer/UpdateFarm_producer/UpdateFarm_producerFactory";

const routes = Router();
const authUser = require('../middleware/authUser');

//CRUD

routes.post('/farm_producer', authUser, (request, response, next) =>
CreateFarm_producerFactory().handle(request, response, next)
);

routes.get('/farm_producer', authUser, (request, response, next) =>
IndexFarm_producerFactory().handle(request, response, next)
);

routes.delete('/farm_producer/:id', authUser, (request, response, next) =>
deleteFarm_producerFactory().handle(request, response, next)
);

routes.put('/farm_producer/:id', authUser, (request, response, next) =>
UpdateFarm_producerFactory().handle(request, response, next)
);

export default routes;