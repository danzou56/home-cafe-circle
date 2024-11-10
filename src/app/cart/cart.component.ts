import { Component, inject, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { OrderItem } from './order-item/order-item';
import { MatButtonModule } from '@angular/material/button';
import { MatFormField, MatLabel } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInput } from '@angular/material/input';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { MatListModule } from '@angular/material/list';
import { OrderItemComponent } from './order-item/order-item.component';
import { MatDialog } from '@angular/material/dialog';
import { HistoryComponent } from './history/history.component';
import { HistoryItem } from './history/history-item';
import { Observable } from 'rxjs';

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

  private static baseUrl = 'http://benji.local:5002';
  private http = inject(HttpClient);

  readonly historyDialog: MatDialog = inject(MatDialog);

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
        type: orderItem.type?.toString(),
        sub_items: orderItem.subItems?.map((subItem) => ({
          name: subItem.name,
        })),
      })),
    };
  }

  submitOrder(): void {
    this.http
      .post(
        `${CartComponent.baseUrl}/order`,
        CartComponent.makeOrder(this.customerName.value, this.orderItems),
        { responseType: 'text' },
      )
      .subscribe(this.submitCallback);
  }

  deleteCallback: (index: number) => void = (index: number) => {
    this.orderItems.splice(index, 1);
  };

  openHistory(): void {
    this.http
      .get<
        {
          orderId: string;
          order: {
            name: string;
            items: OrderItem[];
            timestamp: string;
          };
        }[]
      >(`${CartComponent.baseUrl}/orders`)
      .subscribe((history) => {
        let historyItems: HistoryItem[] = history.map((item) => ({
          orderId: item.orderId,
          name: item.order.name,
          timestamp: new Date(Date.parse(item.order.timestamp)),
          items: item.order.items,
        }));
        console.log(history);
        console.log(historyItems);

        this.historyDialog.open(HistoryComponent, {
          data: {
            historyItems: historyItems,
            reprintCallback: this.reprintCallback,
          },
        });
      });
  }

  reprintCallback: (historyItem: HistoryItem) => Observable<Object> = (
    historyItem: HistoryItem,
  ) =>
    this.http.post(
      `${CartComponent.baseUrl}/reprint/${historyItem.orderId}`,
      this.orderItems,
      { responseType: 'text' },
    );
}
