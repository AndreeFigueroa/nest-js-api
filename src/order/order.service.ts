import { Injectable } from '@nestjs/common';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';
import { InjectModel } from '@nestjs/sequelize';
import { Order } from './entities/order.entity';

@Injectable()
export class OrderService {
  constructor(
    @InjectModel(Order)
    private orderRepository: typeof Order,
  ) {}
  create(createOrderDto: CreateOrderDto) {
    return this.orderRepository.create(createOrderDto as any);
  }

  findAll() {
    return this.findAll();
  }

  findOne(id: number) {
    return this.findOne(id);
  }

  update(id: number, updateOrderDto: UpdateOrderDto) {
    return this.update(id, updateOrderDto);
  }

  remove(id: number) {
    return this.remove(id);
  }
}
