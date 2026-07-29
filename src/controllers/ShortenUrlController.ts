import { Request, Response } from "express";
import { createShortUrl } from "../services/url.service";

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