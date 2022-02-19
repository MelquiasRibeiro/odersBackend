import { Request, Response } from "express";
import axios from 'axios'; 
import {getCustomRepository} from "typeorm";
import { OrderRepositories } from "../repositories/OrderRepositories";
import { OrderItemRepositories } from "../repositories/OrderItemRepositories";

interface IItem{
    id?:string;
    product_name:string;
    product_price:number;
    product_quantity:number;
    order_id?:string;
}


class OrderController {
   async Store(req:Request,res:Response) {


    const Order = getCustomRepository(OrderRepositories);
    const OrderItem = getCustomRepository(OrderItemRepositories);

    const{customer_name,customer_email,customer_address,items}= req.body;

try {
    

    const amount = items?.reduce((accumulator:number,currentValue:IItem)=>{
        return accumulator + (currentValue.product_price*currentValue.product_quantity)
    },0)

    let dolar_amount = 0; 
    try {
        const {data} = await axios.get('https://api.hgbrasil.com/finance')
        dolar_amount =amount/data.results.currencies.USD.buy;

    } catch (error) {
        console.log(error)
    }


    const newOrder = Order.create({
        customer_name,
        customer_email,
        customer_address,
        amount,
        dolar_amount,
    })

   
   await Order.save(newOrder)


    const orderItems = items.map((item:IItem)=>OrderItem.create({
        order_id:newOrder.id,
        product_name: item.product_name,
        product_price: item.product_price,
        product_quantity: item.product_quantity,
    }))


 for await (const res of orderItems.map((itemRes:IItem) =>
    OrderItem.save(itemRes)
    )); 

    return res.status(201).json({Sucess:'your order has been saved'})
} catch (error) {

}
   } 

   async  Index(req:Request,res:Response) {
    const Order = getCustomRepository(OrderRepositories);
    try {
        const allOrders = await Order.find({relations:["items"]})
        return res.status(200).json(allOrders)


    } catch (error) {
        return res.status(400).json({test:' Something went wrong'})
    }

   }
}

export {OrderController}