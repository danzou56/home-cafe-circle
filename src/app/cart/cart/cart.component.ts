import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { OrderItem } from './order-item';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css',
})
export class CartComponent {
  orderItems: OrderItem[] = [];

  private static baseUrl = 'http://sidewalks-imac.local:5001';
  private static http: HttpClient;

  constructor(http: HttpClient) {
    CartComponent.http = http;
  }

  addOrderItem(orderItem: OrderItem): void {
    this.orderItems.push(orderItem);
  }

  submitOrder(name: string): Observable<Object> {
    let body = {
      name: name,
      items: this.orderItems.map((orderItem) => {
        let item = { name: orderItem.name };
        if (orderItem.subItems) {
          // @ts-ignore
          item['sub_items'] = orderItem.subItems.map((subItem) => ({
            name: subItem,
          }));
        }
        return item;
      }),
    };

    return CartComponent.http.post(`${CartComponent.baseUrl}/order`, body);
  }
}
