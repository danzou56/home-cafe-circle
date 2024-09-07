import { Component, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MenuItemComponent } from '../../menu/menu-item.component';
import { Observable } from 'rxjs';
import { OrderItem } from './order-item';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css',
})
@Injectable({ providedIn: 'root' })
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

  static submitOrderFromItems(
    name: string,
    items: Iterable<MenuItemComponent>,
  ): Observable<Object> {
    let orderItems = [];
    for (let item of items) {
      orderItems.push(
        ...Array(item.quantity).fill({
          name: item.name,
        }),
      );
    }

    let body = {
      name: name,
      items: orderItems,
    };

    return CartComponent.http.post(`${CartComponent.baseUrl}/order`, body);
  }
}
