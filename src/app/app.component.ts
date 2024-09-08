import { Component, ViewChild } from '@angular/core';
import { MenuComponent } from './menu/menu.component';
import { CartComponent } from './cart/cart/cart.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { OrderItem } from './cart/cart/order-item/order-item';
import { FoodType } from "./menu/food-type";
import { MenuItemRadio } from "./menu/menu-item/menu-item.component";
import { MenuItem } from "./menu/menu-item/menu-item";

@Component({
  imports: [MenuComponent, CartComponent, MatSidenavModule],
  selector: 'app-root',
  standalone: true,
  styleUrl: './app.component.css',
  templateUrl: './app.component.html',
})
export class AppComponent {
  title = 'home-cafe-circle';

  menu: MenuItem[] = [
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


  @ViewChild(MenuComponent) menuComponent!: MenuComponent;
  @ViewChild(CartComponent) cartComponent!: CartComponent;

  addToCartCallback: (orderItem: OrderItem) => void = (orderItem) => {
    this.cartComponent.addOrderItem(orderItem);
  };

  submitOrderCallback: (object: Object) => void = (_: Object) => {
    this.cartComponent.isSubmitDisabled = true;
    this.cartComponent.resetCart();

    setTimeout(() => {
      this.cartComponent.isSubmitDisabled = false;
    }, 3000);
  };
}
