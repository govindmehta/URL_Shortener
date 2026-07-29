import dotenv from "dotenv";

dotenv.config();

export const PORT = process.env.PORT || 3000;
export const MONGO_URI = process.env.MONGO_URI || "mongodb://localhost:27017/url_shortener";
export const API_BASE_URL = process.env.BASE_URL || "http://localhost:3000";
export const JWT_SECRET = process.env.JWT_SECRET || "your_jwt_secret";
