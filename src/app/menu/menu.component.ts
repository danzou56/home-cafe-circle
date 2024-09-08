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
import { menu as menuData } from './menu';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [MatCardModule, MatListModule, MenuItemComponent],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css',
})
export class MenuComponent {
  readonly orderOptionsDialog: MatDialog = inject(MatDialog);

  @Input()
  addCallback!: (orderItem: OrderItem) => void;
  @Input()
  readonly menu: MenuItem[] = menuData

  foodItems = this.menu.filter((item) => {
    return item.tipe == FoodType.Food;
  });
  drinkItems = this.menu.filter((item) => {
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
