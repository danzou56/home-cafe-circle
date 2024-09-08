import { Component, ViewChild } from '@angular/core';
import { MenuComponent } from './menu/menu.component';
import { CartComponent } from './cart/cart/cart.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { OrderItem } from './cart/cart/order-item/order-item';

@Component({
  imports: [MenuComponent, CartComponent, MatSidenavModule],
  selector: 'app-root',
  standalone: true,
  styleUrl: './app.component.css',
  templateUrl: './app.component.html',
})
export class AppComponent {
  title = 'home-cafe-circle';

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
