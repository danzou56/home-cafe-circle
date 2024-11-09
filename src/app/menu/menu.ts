import { MenuItem } from './menu-item/menu-item';
import { FoodType } from './food-type';

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
    name: 'chai',
    tipe: FoodType.Drink,
    description: 'Chai',
    radios: [],
  },
  {
    name: 'pumpkin flagel',
    tipe: FoodType.Food,
    description: "An unfortunately flat bagel, misshapen by this week's events",
    radios: [],
  },
  {
    name: 'fall foccacia sandwich',
    tipe: FoodType.Food,
    description: 'Turkey, apple, cheddar, fig jam, mayo, and leaves',
    radios: [],
  },
  {
    name: 'booberry hand pies',
    tipe: FoodType.Food,
    description: "Spooky season hasn't ended yet!",
    radios: [],
  },
  {
    name: 'apple cider donut',
    tipe: FoodType.Food,
    description: 'A dessert person recipe',
    radios: [],
  },
  {
    name: 'apple turnover',
    tipe: FoodType.Food,
    description: '',
    radios: [],
  },
  {
    name: 'pumpkin whoopie pies',
    tipe: FoodType.Food,
    description: '',
    radios: [],
  },
];

export { menu };
