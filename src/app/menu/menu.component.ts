import {
  Component,
  inject,
  Input,
  QueryList,
  ViewChildren,
} from '@angular/core';
import { FoodType } from './food-type';
import {
  MenuItemComponent,
  MenuItemRadio,
} from './menu-item/menu-item.component';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { OrderItem } from '../cart/cart/order-item/order-item';
import { MatDialog } from '@angular/material/dialog';
import { OptionSelectorComponent } from './option-selector/option-selector.component';
import { MenuItem } from './menu-item/menu-item';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [MatCardModule, MatListModule, MenuItemComponent],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css',
})
export class MenuComponent {
  readonly orderOptionsDialog: MatDialog = inject(MatDialog);

  @ViewChildren(MenuItemComponent)
  menuItemComponents!: QueryList<MenuItemComponent>;

  // TODO pass menu in as a param
  @Input()
  menu: MenuItem[] = [];
  @Input()
  addCallback!: (orderItem: OrderItem) => void;

  menuItemsData: MenuItem[] = [
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
  ];

  foodItems = this.menuItemsData.filter((item) => {
    return item.tipe == FoodType.Food;
  });
  drinkItems = this.menuItemsData.filter((item) => {
    return item.tipe == FoodType.Drink;
  });

  addMenuItemCallback: (menuItem: MenuItem) => void = (menuItem) => {
    console.log(menuItem);
    if (menuItem.radios.length > 0) {
      this.orderOptionsDialog.open(OptionSelectorComponent, {
        data: {
          menuItem: menuItem,
          addCallback: this.addCallback,
        },
      });
    } else {
      this.addCallback(new OrderItem(menuItem.name));
    }
  };
  protected readonly MenuItem = MenuItem;
}
