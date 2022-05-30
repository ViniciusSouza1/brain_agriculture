import { Router } from "express";
import { CreateFarmFactory} from "../modules/Farm/CreateFarm/CreateFarmFactory";
import { deleteFarmFactory } from "../modules/Farm/DeleteFarm/DeleteFarmFactory";
import { IndexFarmFactory } from "../modules/Farm/IndexFarm/IndexFarmFactory";
import { PizzaPerCultureFarmFactory } from "../modules/Farm/PizzaPerCultureFarm/PizzaPerCultureFarmFactory";
import { PizzaPerStateFarmFactory } from "../modules/Farm/PizzaPerStateFarm/PizzaPerStateFarmFactory";
import { TotalOfAcresFarmFactory } from "../modules/Farm/TotalOfAcresFarm/TotalOfAcresFarmFactory";
import { TotalOfFarmFactory } from "../modules/Farm/TotalOfFarm/TotalOfFarmFactory";
import { updateFarmFactory } from "../modules/Farm/UpdateFarm/UpdateFarmFactory";

const routes = Router();
const auth = require('../middleware/auth');

//CRUD

routes.post('/farm',auth, (request, response, next) =>
CreateFarmFactory().handle(request, response, next)
);

routes.get('/farm', auth, (request, response, next) =>
IndexFarmFactory().handle(request, response, next)
);

routes.put('/farm/:id', auth, (request, response, next) =>
updateFarmFactory().handle(request, response, next)
);

routes.delete('/farm/:id', auth, (request, response, next) =>
deleteFarmFactory().handle(request, response, next)
);

// estatisticas

routes.get('/total/farm', auth, (request, response, next) =>
TotalOfFarmFactory().handle(request, response, next)
);

routes.get('/total/acres/farm', auth, (request, response, next) =>
TotalOfAcresFarmFactory().handle(request, response, next)
);

routes.get('/pizza/state/farm', auth, (request, response, next) =>
PizzaPerStateFarmFactory().handle(request, response, next)
);

routes.get('/pizza/culture/farm', auth, (request, response, next) =>
PizzaPerCultureFarmFactory().handle(request, response, next)
);



export default routes;