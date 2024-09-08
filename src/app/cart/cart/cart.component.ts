import { Component, inject, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { OrderItem } from './order-item/order-item';
import { MatButtonModule } from '@angular/material/button';
import { MatFormField, MatLabel } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInput } from '@angular/material/input';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { MatListModule } from "@angular/material/list";
import { OrderItemComponent } from "./order-item/order-item.component";

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [
    MatButtonModule,
    MatFormField,
    MatIconModule,
    MatInput,
    MatLabel,
    ReactiveFormsModule,
    MatListModule,
    OrderItemComponent,
  ],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css',
})
export class CartComponent {
  orderItems: OrderItem[] = [];
  isSubmitDisabled = false;
  customerName: FormControl = new FormControl('');

  private static baseUrl = 'http://sidewalks-imac.local:5001';
  private http = inject(HttpClient);

  @Input()
  submitCallback!: (object: Object) => void;

  addOrderItem(orderItem: OrderItem): void {
    this.orderItems.push(orderItem);
  }

  resetCart(): void {
    this.customerName.setValue('');
    this.orderItems = [];
  }

  static makeOrder(name: string, orderItems: OrderItem[]): Object {
    return {
      name: name,
      items: orderItems.map((orderItem) => ({
        name: orderItem.name,
        sub_items:
          orderItem.subItems?.map((subItem) => ({ name: subItem.name })),
      })),
    };
  }

  submitOrder(): void {
    this.http
      .post(
        `${CartComponent.baseUrl}/order`,
        CartComponent.makeOrder(this.customerName.value, this.orderItems),
      )
      .subscribe(this.submitCallback);
  }

  deleteCallback: (index: number) => void = (index: number) => {
    this.orderItems.splice(index, 1);
  }
}
