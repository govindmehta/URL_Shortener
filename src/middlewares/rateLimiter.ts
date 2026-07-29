import { rateLimit } from "express-rate-limit";

export const shortenLimiter = rateLimit({
    windowMs: 15 * 60 * 1000,
    limit: 100,

    message: {
        message: "Too many requests. Please try again later."
    },

    standardHeaders: true,
    legacyHeaders: false,
});