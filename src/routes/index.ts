import { Router } from 'express';
import { getAllUrls, getOriginalUrl, shortenUrl } from '../controllers/url.controller';

const mainRouter = Router();

mainRouter.post('/urls/shorten', shortenUrl);
mainRouter.get('/urls/:shortCode', getOriginalUrl);
mainRouter.get('/urls', getAllUrls);
// mainRouter.get('/urls/:shortCode/stats');

export default mainRouter;