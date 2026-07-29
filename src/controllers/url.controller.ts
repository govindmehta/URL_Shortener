import { Request, Response } from "express";
import { createShortUrl, getOriginalUrlByShortCode } from "../services/url.service";

export const shortenUrl = async (req: Request, res: Response): Promise<void> => {
    try {
        const { url } = req.body;
        const result = await createShortUrl(url);
        console.log(result);
        res.status(201).json({
            message: "Short URL created successfully",
            data: result
        });
    } catch (error) {
        res.status(400).json({
            message: error instanceof Error ? error.message : "Something went wrong",
        });
    }
}

//the req of params is string or string[] so we need to specify the type of req.params.shortCode as string
export const getOriginalUrl = async (req: Request<{shortCode: string}> , res: Response): Promise<void> => {
    try {
        const shortCode = req.params.shortCode;
        console.log(req.params);
        console.log(req.params.shortCode);
        const originalUrl = await getOriginalUrlByShortCode(shortCode);
        //use the below for direct redirection to the original url instead of sending it in the response in the future on browser.
        // res.redirect(302, originalUrl);
        res.status(200).json({
            message: "Original URL retrieved successfully",
            data: originalUrl
        });
    } catch (error) {
        res.status(404).json({
            message: error instanceof Error ? error.message : "Something went wrong",
        });
    }
}