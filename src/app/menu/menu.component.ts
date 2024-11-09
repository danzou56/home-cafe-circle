import { Component, inject, Input } from '@angular/core';
import { FoodType } from './food-type';
import { MenuItemComponent } from './menu-item/menu-item.component';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { OrderItem } from '../cart/order-item/order-item';
import { MatDialog } from '@angular/material/dialog';
import { OptionSelectorComponent } from './option-selector/option-selector.component';
import { MenuItem } from './menu-item/menu-item';
import { menu as menuData } from './menu';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [
    MatCardModule,
    MatListModule,
    MenuItemComponent,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
  ],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css',
})
export class MenuComponent {
  readonly orderOptionsDialog: MatDialog = inject(MatDialog);

  @Input()
  addCallback!: (orderItem: OrderItem) => void;
  @Input()
  readonly menu: MenuItem[] = menuData;

  foodItems = this.menu.filter((item) => {
    return item.tipe == FoodType.Food;
  });
  drinkItems = this.menu.filter((item) => {
    return item.tipe == FoodType.Drink;
  });
  snackItems = this.menu.filter((item) => {
    return item.tipe == FoodType.Snack;
  });

  addMenuItemCallback: (menuItem: MenuItem) => void = (menuItem) => {
    this.orderOptionsDialog.open(OptionSelectorComponent, {
      data: {
        menuItem: menuItem,
        addCallback: this.addCallback,
      },
    });
  };
}
