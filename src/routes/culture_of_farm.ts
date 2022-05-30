import { Router } from "express";
import { CreateCulture_of_farmFactory} from "../modules/Culture_of_farm/CreateCulture_of_farm/CreateCulture_of_farmFactory";
import { deleteCulture_of_farmFactory } from "../modules/Culture_of_farm/DeleteCulture_of_farm/DeleteCulture_of_farmFactory";
import { IndexCulture_of_farmFactory } from "../modules/Culture_of_farm/IndexCulture_of_farm/IndexCulture_of_farmFactory";
import { updateCulture_of_farmFactory } from "../modules/Culture_of_farm/UpdateCulture_of_farm/UpdateCulture_of_farmFactory";

const routes = Router();
const auth = require('../middleware/auth');

//CRUD

routes.post('/culture_of_farm',auth, (request, response, next) =>
CreateCulture_of_farmFactory().handle(request, response, next)
);

routes.get('/culture_of_farm', auth, (request, response, next) =>
IndexCulture_of_farmFactory().handle(request, response, next)
);

routes.put('/culture_of_farm/:id', auth, (request, response, next) =>
updateCulture_of_farmFactory().handle(request, response, next)
);

routes.delete('/culture_of_farm/:id', auth, (request, response, next) =>
deleteCulture_of_farmFactory().handle(request, response, next)
);



export default routes;