import express from 'express'
import cors from "cors";
import { config } from "dotenv";
import colors from 'colors'

import products from './data/product.js'
// import connectionToDb from './db.js';


config();
// connectionToDb();
const app =  express() ;
const PORT=process.env.PORT?process.env.PORT:5000

app.use(
  cors({
    origin: [process.env.FRONTEND],
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
  })
);
app.use(express.json())



app.get('/new', (req,res)=>{
    res.send('hello server is running')
})

app.get('/api/products',(req,res)=>{
res.json(products)
})

app.get('/api/products/:id', (req,res)=>{
  const item = products.find((p)=>
  p._id === req.params.id)
  res.json(item)
})

app.listen(PORT,()=>{
    console.log(`Server is running on the port : ${PORT}`.rainbow)
})