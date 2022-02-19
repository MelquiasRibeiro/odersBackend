import {Entity,Column, CreateDateColumn,UpdateDateColumn,JoinColumn, PrimaryColumn,ManyToOne} from "typeorm";
import { v4 as uuid } from "uuid";
import {Order} from './Order'

@Entity()
 class OrderItem {
   @PrimaryColumn()  
   readonly id :string

   @Column()
   product_name :string

   @Column()
   product_price :number

   @Column()
   product_quantity :number

   @Column()
   order_id :string

   @CreateDateColumn()
   created_at :Date
   
   @UpdateDateColumn()
   updated_at :Date
   
   @ManyToOne(() => Order, order => order.id)
   @JoinColumn({ name: "order_id" })
   order: Order;

   constructor(){
       if(!this.id){
           this.id= uuid()
       }
   }

}

export {OrderItem};