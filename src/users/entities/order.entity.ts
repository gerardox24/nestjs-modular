import { User } from './user.entity';
import { Product } from './../../products/entities/product.entity';
import { Column, Entity } from 'typeorm';

export class Order {
  date: Date;
  user: User;
  products: Product[];
}
