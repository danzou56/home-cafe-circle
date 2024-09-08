import { MenuItem } from "./menu-item/menu-item";
import { FoodType } from "./food-type";

const menu: MenuItem[] = [
  {
    name: 'latte',
    tipe: FoodType.Drink,
    description: 'It might be shit',
    radios: [
      { name: 'hot/iced', options: ['hot', 'iced'] },
      { name: 'milk', options: ['2%', 'oat'] },
    ],
  },
  {
    name: 'matcha latte',
    tipe: FoodType.Drink,
    description: 'The flavor of grass',
    radios: [
      { name: 'hot/iced', options: ['hot', 'iced'] },
      { name: 'grass amount', options: ['less', 'more'] },
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
    radios: [{ name: 'spice level', options: ['mild', 'hot', 'very hot'] }],
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
];

export { menu };
