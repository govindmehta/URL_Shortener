import express from "express";
import cors from "cors";
import mainRouter from "./routes/index";
import { shortenLimiter } from "./middlewares/rateLimiter";

const app = express();

// Middleware
app.use(express.json());
app.use(cors());

// Routes
app.get("/health", (_req, res) => {
  res.status(200).json({
    status: "OK",
  });
});

//redirecting routes to mainRouter
app.use('/api/v1',shortenLimiter,mainRouter);

export default app;