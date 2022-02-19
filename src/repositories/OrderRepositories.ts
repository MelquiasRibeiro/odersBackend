import {EntityRepository, Repository} from "typeorm";
import { Order } from "../models/Order";

@EntityRepository(Order)
class OrderRepositories extends Repository<Order> {

}
export{OrderRepositories} 