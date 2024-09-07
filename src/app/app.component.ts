import { Component, ViewChild } from '@angular/core';
import { MenuComponent } from './menu/menu.component';
import { CartComponent } from './cart/cart/cart.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButton } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import { MatFormField, MatFormFieldModule } from '@angular/material/form-field';
import { MatInput, MatInputModule } from '@angular/material/input';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { OrderItem } from './cart/cart/order-item';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';

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
  isSubmitDisabled = false;

  @ViewChild(MenuComponent) menuComponent!: MenuComponent;
  @ViewChild(CartComponent) cartComponent!: CartComponent;
  customerName: FormControl = new FormControl('');

  orderCallback: (orderItem: OrderItem) => void = (orderItem) => {
    this.cartComponent.addOrderItem(orderItem);
  };

  submitOrder(): void {
    this.cartComponent.submitOrder(this.customerName.value).subscribe((_) => {
      this.menuComponent.resetItems();
      this.customerName.setValue('');
      this.isSubmitDisabled = true;

      setTimeout(() => {
        this.isSubmitDisabled = false;
      }, 3000);
    });
  }
}
