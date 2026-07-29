import {Router} from 'express';

const mainRouter = Router();

mainRouter.post('/url/shorten');
mainRouter.get('/:shortCode');
mainRouter.get('/urls');
mainRouter.get('/urls/:shortCode/stats');

export default mainRouter;