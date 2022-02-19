import {
    Entity,
    Column,
    CreateDateColumn,
    UpdateDateColumn,
    PrimaryColumn,
    OneToMany
} from "typeorm";
import { v4 as uuid } from "uuid";
import { OrderItem } from "./OrderItem";

@Entity()
 class Order {
   @PrimaryColumn()  
   readonly id :string

   @Column()
   customer_name :string

   @Column()
   customer_email :string
   
   @Column()
   customer_address :string

   @Column()
   amount :number

   @Column()
   dolar_amount:number
   
   @CreateDateColumn()
   created_at :Date
   
   @UpdateDateColumn()
   updated_at :Date

   @OneToMany(() => OrderItem, items => items.order)
   items: OrderItem[];

   constructor(){
       if(!this.id){
           this.id= uuid()
       }
   }

}

export {Order};