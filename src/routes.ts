import express from 'express';
import {OrderController  } from "./controllers/OrderController";

const routes = express.Router();

const orderController = new OrderController();


routes.get("/",(_,res)=>{
    res.send({ok:true})
})

routes.post('/checkout',orderController.Store)
routes.get('/checkouts',orderController.Index)


export default routes;