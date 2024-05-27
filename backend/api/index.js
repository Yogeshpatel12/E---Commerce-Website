import express from "express";
import cors from "cors";
import { config } from "dotenv";

import products from "../data/product.js";
// import connectionToDb from '../db.js';

config();
// connectionToDb();

const app = express();

app.use(
  cors({
    origin: [process.env.FRONTEND],
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
  })
);
app.use(express.json())

app.get("/api/products", (req, res) => {
  res.json(products);
});

app.get("/api/products/:id", (req, res) => {
  const item = products.find((p) => p._id === req.params.id);
  res.json(item);
});

app.get("/", (req, res) => {
  res.redirect(process.env.FRONTEND);
});
export default app;
