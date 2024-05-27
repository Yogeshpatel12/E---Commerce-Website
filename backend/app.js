import express from 'express'
import products from './data/product.js'
import connectionToDb from './db.js';
import colors from 'colors'



const app =  express() ;

connectionToDb();

app.get('/new', (req,res)=>{
    res.send('hello server is running')
})

app.get('/products',(req,res)=>{
res.json(products)
})

app.get('/products/:id', (req,res)=>{
  const item = products.find((p)=>
  p._id === req.params.id)
  res.json(item)
})

app.listen(3000,()=>{
    console.log("Server is running on the port : 3000".rainbow)
})