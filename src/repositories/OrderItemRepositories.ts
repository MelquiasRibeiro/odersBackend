import { Repository,EntityRepository } from "typeorm";
import { OrderItem } from "../models/OrderItem";

@EntityRepository(OrderItem)
class OrderItemRepositories  extends Repository<OrderItem> {

}
export{OrderItemRepositories }