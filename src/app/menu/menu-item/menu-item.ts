import { FoodType } from '../food-type';
import { MenuItemRadio } from './menu-item.component';

export class MenuItem {
  name: string;
  tipe: FoodType;
  description: string;
  radios: MenuItemRadio[];

  constructor(
    name: string,
    tipe: FoodType,
    description: string,
    radios: MenuItemRadio[] = [],
  ) {
    this.name = name;
    this.tipe = tipe;
    this.description = description;
    this.radios = radios;
  }
}
