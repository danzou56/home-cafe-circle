import { Component, QueryList, ViewChildren } from '@angular/core';
import { FoodType } from './food-type';
import { MenuItemComponent } from './menu-item.component';
import { MatCardModule } from '@angular/material/card';
import {
  MatList,
  MatListItem,
  MatListItemLine,
  MatListItemTitle,
} from '@angular/material/list';
import { MatButton } from '@angular/material/button';

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
  @ViewChildren(MenuItemComponent)
  menuItemComponents!: QueryList<MenuItemComponent>;

  menuItemsData = [
    {
      name: 'latte',
      tipe: FoodType.Drink,
      description: 'It might be shit',
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
    /*    new MenuItemComponent("Latte", FoodType.Drink, "Coffee mmmm"),
        new MenuItemComponent("Matcha Latte", FoodType.Drink, "Grass mmmm"),
        new MenuItemComponent("London", FoodType.Drink, "London"),
        new MenuItemComponent("London", FoodType.Drink, "London"),

        new MenuItemComponent("Egg Salad Sandwich", FoodType.Food, "Eggs!")*/
  ];

  foodItems = this.menuItemsData.filter((item) => {
    return item.tipe == FoodType.Food;
  });
  drinkItems = this.menuItemsData.filter((item) => {
    return item.tipe == FoodType.Drink;
  });

  resetItems(): void {
    this.menuItemComponents.forEach((item) => item.resetQuantity());
  }
}
