import { API_BASE_URL } from "../config/dotenv";
import { UrlModel } from "../models/Url";
import { generateShortCode } from "../utils/genShortCode";
import { isValidUrl } from "../utils/validateUrl";


export const createShortUrl = async (url: string) => {
    if (!url) {
        throw new Error("URL is required");
    }
    if (!isValidUrl(url)) {
        throw new Error("Invalid URL");
    }

    let shortCode = generateShortCode();

    //generate a unique short code by checking if it already exists in the database. If it does, generate a new one until we find a unique one.
    while (await UrlModel.exists({ shortCode })) {
        shortCode = generateShortCode();
    }

    const createdUrl = await UrlModel.create({
        originalUrl: url,
        shortCode: shortCode,
    })
    return {
        originalUrl: createdUrl.originalUrl,
        shortCode: createdUrl.shortCode,
        shortUrl: `${API_BASE_URL}/${createdUrl.shortCode}`
    }
}

export const getOriginalUrlByShortCode = async (shortCode: string): Promise<string> => {
    //filter the url by shortCode and increment the clicks by 1 and return the originalUrl
    const url = await UrlModel.findOneAndUpdate(
        { shortCode },
        { $inc: { clicks: 1 } },
        { returnDocument: "after" }
    );
    if (!url) {
        throw new Error("Short URL not found");
    }
    return url.originalUrl;
}

export const getAllUrlsService = async () => {
    const urls = await UrlModel.find().sort({ createdAt: -1 });
    
    return urls.map((url) => ({
        originalUrl: url.originalUrl,
        shortCode: url.shortCode,
        shortUrl: `${API_BASE_URL}/${url.shortCode}`,
        clicks: url.clicks,
        createdAt: url.createdAt,
    }))
}