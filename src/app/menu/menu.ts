import { MenuItem, MenuItemRadio } from "./menu-item/menu-item";
import { FoodType } from "./food-type";

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
        name:"milk"',
        options: "2%"',"oat"'],
        default:"2%"',
        recommended:"2%",
      },
      {
        name:"flavor"',
        options: "regular"',"vanilla"'],
        default:"regular",
      }
    ],
  },
  {
    'matcha latte',
    tipe: FoodType.Drink,
    description: 'The flavor of grass',
    radios: [
      { name: 'hot/iced', options: ['hot', 'iced'] },
      {
        name: "milk",
        options: ["2%", "oat"],
        default: "oat",
        recommended: "oat"
      },
      {
        name: "flavor",
        options: ["regular", "maple"],
        default: "regular"
      }
    ],
  },
  {
    'chai',
    tipe: FoodType.Drink,
    description: 'Chai',
    radios: [],
  },
  {
    'pumpkin flagel',
    tipe: FoodType.Food,
    description: "An unfortunately flat bagel, misshapen by this week's events",
    radios: [halvable],
  },
  {
    'fall foccacia sandwich',
    tipe: FoodType.Food,
    description: 'Turkey, apple, cheddar, fig jam, mayo, and leaves',
    radios: [halvable],
  },
  {
    'booberry hand pies',
    tipe: FoodType.Food,
    description: "Spooky season hasn't ended yet!",
    radios: [halvable],
  },
  {
    'apple cider donut',
    tipe: FoodType.Food,
    description: 'A dessert person recipe',
    radios: [halvable],
  },
  {
    'apple turnover',
    tipe: FoodType.Food,
    description: '',
    radios: [],
  },
  {
    'pumpkin whoopie pies',
    tipe: FoodType.Food,
    description: '',
    radios: [],
  },
]

export { menu };
