import { MenuItem, MenuItemRadio } from './menu-item/menu-item';
import { FoodType } from './food-type';

const halvable: MenuItemRadio = {
  name: '',
  options: ['whole', 'half'],
  default: 'whole',
};

const menu: MenuItem[] = [
  {
    name: 'latte',
    tipe: FoodType.Drink,
    description: 'It might be shit',
    radios: [
      { name: 'hot/iced', options: ['hot', 'iced'] },
      {
        name: 'milk',
        options: ['2%', 'oat'],
        default: '2%',
        recommended: '2%',
      },
      {
        name: 'flavor',
        options: ['regular', 'vanilla'],
        default: 'regular',
      },
    ],
  },
  {
    name: 'matcha latte',
    tipe: FoodType.Drink,
    description: 'The flavor of grass',
    radios: [
      { name: 'hot/iced', options: ['hot', 'iced'] },
      {
        name: 'milk',
        options: ['2%', 'oat'],
        default: 'oat',
        recommended: 'oat',
      },
      {
        name: 'flavor',
        options: ['regular', 'maple'],
        default: 'regular',
      },
    ],
  },
  {
    name: 'chai',
    tipe: FoodType.Drink,
    description: 'Hot, out of a pot',
    radios: [],
  },
  {
    name: 'pumpkin flagel',
    tipe: FoodType.Food,
    description: "An unfortunately flat bagel, misshapen by the week's events",
    radios: [halvable],
  },
  {
    name: 'fall foccacia sandwich',
    tipe: FoodType.Food,
    description:
      'Turkey, apple, cheddar, dijon mustard, mayo, chips, and leaves',
    radios: [halvable],
  },
  {
    name: 'booberry hand pies',
    tipe: FoodType.Snack,
    description: "Spooky season hasn't ended yet!",
    radios: [],
  },
  {
    name: 'apple cider donut',
    tipe: FoodType.Snack,
    description: 'A cake based donut with cinnamon sugar on top',
    radios: [halvable],
  },
  {
    name: 'apple turnover',
    tipe: FoodType.Snack,
    description: 'Cinnamon, puff pastry, sweet apple goodness',
    radios: [],
  },
  {
    name: 'pumpkin whoopie pies',
    tipe: FoodType.Snack,
    description: "Cakey oreos but it's pumpkin",
    radios: [halvable],
  },
];

export { menu };
