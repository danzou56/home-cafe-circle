import { MenuItem } from "./menu-item/menu-item";
import { FoodType } from "./food-type";
import { MenuItemRadio } from "./menu-item/menu-item.component";

const menu: MenuItem[] = [
  {
    name: 'latte',
    tipe: FoodType.Drink,
    description: 'It might be shit',
    radios: [
      new MenuItemRadio('hot/iced', 'hot', 'iced'),
      new MenuItemRadio('milk', '2%', 'oat'),
    ],
  },
  {
    name: 'matcha latte',
    tipe: FoodType.Drink,
    description: 'The flavor of grass',
    radios: [
      new MenuItemRadio('hot/iced', 'hot', 'iced'),
      new MenuItemRadio('grass amount', 'less', 'more'),
    ],
  },
  {
    name: 'tomago sando',
    tipe: FoodType.Food,
    description: 'Japanese style egg salad sandwich on house made milk bread',
    radios: [],
  },
  {
    name: 'scallion pancake "sando"',
    tipe: FoodType.Food,
    description:
      'Scallion pancake breakfast sandwich with egg, spam, american cheese, and chili oil',
    radios: [new MenuItemRadio('spicy level', 'mild', 'hot', 'very hot')],
  },
  {
    name: 'tomato foccacia slice',
    tipe: FoodType.Food,
    description: '',
    radios: [],
  },
  {
    name: 'pistachio macaron',
    tipe: FoodType.Food,
    description: '',
    radios: [],
  },
]

export { menu };
