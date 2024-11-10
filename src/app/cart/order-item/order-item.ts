import { FoodType } from '../../menu/food-type';

export interface OrderItem {
  readonly name: string;
  readonly type?: FoodType;
  readonly subItems?: OrderItem[];
}
