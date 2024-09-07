import { Component, Injectable, QueryList, ViewChild } from '@angular/core';
import { MenuComponent } from './menu/menu.component';
import { CartComponent } from './cart/cart/cart.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButton } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import { HttpClient } from '@angular/common/http';
import { MatFormField, MatFormFieldModule } from '@angular/material/form-field';
import { MatInput, MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormControl } from '@angular/forms';
import { MenuItemComponent } from './menu/menu-item.component';
import { Observable } from 'rxjs';

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
  ],
  selector: 'app-root',
  standalone: true,
  styleUrl: './app.component.css',
  templateUrl: './app.component.html',
})
@Injectable({ providedIn: 'root' })
export class AppComponent {
  title = 'home-cafe-circle';
  private static baseUrl = 'http://sidewalks-imac.local:5001';
  private static http_: HttpClient;

  constructor(private http: HttpClient) {
    AppComponent.http_ = http;
  }

  @ViewChild(MenuComponent) menuComponent!: MenuComponent;
  customerName: FormControl = new FormControl('');

  submitOrder(): void {
    AppComponent.submitOrderFromItems(
      this.customerName.value,
      this.menuComponent.menuItemComponents,
    ).subscribe((_) => {
      this.menuComponent.resetItems();
      this.customerName.setValue('');
    });
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

    return AppComponent.http_.post(`${AppComponent.baseUrl}/order`, body);
  }
}
