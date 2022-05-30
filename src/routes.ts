import { Router } from 'express';

import user from './routes/user';
import farm_producer from './routes/farm_producer'
import farm from './routes/farm';

const routes = Router();

routes.get('/', (req, res) => {
    return res.json({ message: 'Hello, New Project! ' })
})

routes.use(user);
routes.use(farm_producer);
routes.use(farm);

export default routes;
