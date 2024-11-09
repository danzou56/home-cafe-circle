import { FoodType } from '../food-type';

export interface MenuItem {
  readonly name: string;
  readonly tipe: FoodType;
  readonly description: string;
  readonly radios?: MenuItemRadio[];
}

export interface MenuItemRadio {
  readonly name: string;
  readonly options: string[];
  readonly default?: string;
  readonly recommended?: string;
}
