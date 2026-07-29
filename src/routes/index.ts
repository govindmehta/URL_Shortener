import { Router } from 'express';
import { shortenUrl } from '../controllers/ShortenUrlController';
import { getOriginalUrl } from '../services/url.service';

const mainRouter = Router();

mainRouter.post('/urls/shorten', shortenUrl);
mainRouter.get('/:shortCode', getOriginalUrl);
// mainRouter.get('/urls');
// mainRouter.get('/urls/:shortCode/stats');

export default mainRouter;