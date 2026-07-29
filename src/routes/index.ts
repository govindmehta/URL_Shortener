import { Router } from 'express';
import { getOriginalUrl, shortenUrl } from '../controllers/url.controller';

const mainRouter = Router();

mainRouter.post('/urls/shorten', shortenUrl);
mainRouter.get('/:shortCode', getOriginalUrl);
// mainRouter.get('/urls');
// mainRouter.get('/urls/:shortCode/stats');

export default mainRouter;