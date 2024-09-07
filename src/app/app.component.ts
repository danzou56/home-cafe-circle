import { Component, Injectable, ViewChild } from '@angular/core';
import { MenuComponent } from './menu/menu.component';
import { CartComponent } from './cart/cart/cart.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButton } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import { HttpClient } from '@angular/common/http';
import { MatFormField, MatFormFieldModule } from '@angular/material/form-field';
import { MatInput, MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { FormControl } from '@angular/forms';

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
  private baseUrl = "http://sidewalks-imac.local:5001"

  constructor(private http: HttpClient) {}

  @ViewChild(MenuComponent) menuComponent!: MenuComponent;
  customerName: FormControl = new FormControl("");

  submitOrder(): void {
    let body = {
      name: this.customerName.value,
      items: this.menuComponent.menuItemComponents
        .map((item, _1, _2) =>
          Array(item.quantity).fill({
            name: item.name,
          }),
        )
        .flat(),
    };

    this.http
      .post(`${this.baseUrl}/order`, body)
      .subscribe((_) => {
        this.menuComponent.resetItems();
        this.customerName.setValue("");
      });
  }
}
