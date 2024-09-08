import { Component, ViewChild } from '@angular/core';
import { MenuComponent } from './menu/menu.component';
import { CartComponent } from './cart/cart/cart.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButton } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import { MatFormField, MatFormFieldModule } from '@angular/material/form-field';
import { MatInput, MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { OrderItem } from './cart/cart/order-item';
import { MatDialogModule } from '@angular/material/dialog';

@Component({
  imports: [
    MenuComponent,
    CartComponent,
    MatSidenavModule,
    MatButton,
    MatIcon,
    MatFormField,
    MatInput,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    MatDialogModule,
  ],
  selector: 'app-root',
  standalone: true,
  styleUrl: './app.component.css',
  templateUrl: './app.component.html',
})
export class AppComponent {
  title = 'home-cafe-circle';

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
  }

}
