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
import {
  MatList,
  MatListItem,
  MatListItemLine,
  MatListItemTitle,
} from '@angular/material/list';
import { MatButton } from '@angular/material/button';
import { OrderItem } from '../cart/cart/order-item';
import { MatDialog } from '@angular/material/dialog';
import { OptionSelectorComponent } from './option-selector/option-selector.component';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [
    MatCardModule,
    MatList,
    MatListItem,
    MatListItemTitle,
    MatListItemLine,
    MatButton,
    MenuItemComponent,
  ],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css',
})
export class MenuComponent {
  readonly orderOptionsDialog: MatDialog = inject(MatDialog);

  @ViewChildren(MenuItemComponent)
  menuItemComponents!: QueryList<MenuItemComponent>;

  // TODO pass menu in as a param
  @Input()
  menu: any = null;
  @Input()
  addCallback!: (orderItem: OrderItem) => void;

  menuItemsData = [
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
    },

    {
      name: 'tomago sando',
      tipe: FoodType.Food,
      description: 'Japanese style egg salad sandwich on house made milk bread',
    },
    {
      name: 'scallion pancake "sando"',
      tipe: FoodType.Food,
      description:
        'Scallion pancake breakfast sandwich with egg, spam, american cheese, and chili oil',
    },
    {
      name: 'tomato foccacia slice',
      tipe: FoodType.Food,
      description: '',
    },
    {
      name: 'pistachio macaroon',
      tipe: FoodType.Food,
      description: '',
    },
  ];

  foodItems = this.menuItemsData.filter((item) => {
    return item.tipe == FoodType.Food;
  });
  drinkItems = this.menuItemsData.filter((item) => {
    return item.tipe == FoodType.Drink;
  });

  addMenuItemCallback: (menuItem: MenuItemComponent) => void = (menuItem) => {
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
}
