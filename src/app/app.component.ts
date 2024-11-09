import { Component, ViewChild } from '@angular/core';
import { MenuComponent } from './menu/menu.component';
import { CartComponent } from './cart/cart.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { OrderItem } from './cart/order-item/order-item';
import { MatIcon } from '@angular/material/icon';
import { MatIconButton } from '@angular/material/button';
import { MatToolbar } from '@angular/material/toolbar';

@Component({
  imports: [
    MenuComponent,
    CartComponent,
    MatSidenavModule,
    MatIcon,
    MatIconButton,
    MatToolbar,
  ],
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

  isCartOpen = true;
  cartCallback: () => void = () => {
    this.isCartOpen = !this.isCartOpen;
  };
}
