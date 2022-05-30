import { Router } from 'express';

import user from './routes/user';
import farm_producer from './routes/farm_producer'
import farm from './routes/farm';
import culture from './routes/culture';
import culture_of_farm from './routes/culture_of_farm';

const routes = Router();

routes.get('/', (req, res) => {
    return res.json({ message: 'Hello, New Project! ' })
})

routes.use(user);
routes.use(farm_producer);
routes.use(farm);
routes.use(culture);
routes.use(culture_of_farm);

export default routes;
