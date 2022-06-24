import "dotenv/config";
import "./database/conexdb.js";
import express, { json } from "express";
import authRouter from './routes/auth.route.js';

const app = express();

app.use(express.json());
app.use('/api/v1/auth', authRouter);

const PORT = process.env.PORT || 5000;
app.listen(5000, () => {console.log("🚀 http://localhost:" + PORT)});