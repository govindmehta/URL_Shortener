import { Router } from 'express';
import { getAllUrls, getOriginalUrl, getUrlStats, shortenUrl } from '../controllers/url.controller';

const mainRouter = Router();

mainRouter.post('/urls/shorten', shortenUrl);
mainRouter.get('/urls/:shortCode', getOriginalUrl);
mainRouter.get('/urls', getAllUrls);
mainRouter.get('/urls/:shortCode/stats', getUrlStats);

export default mainRouter;