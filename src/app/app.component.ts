import { Component, Injectable, ViewChild } from '@angular/core';
import { MenuComponent } from './menu/menu.component';
import { CartComponent } from './cart/cart/cart.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButton } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [MenuComponent, CartComponent, MatSidenavModule, MatButton, MatIcon],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
@Injectable({ providedIn: 'root' })
export class AppComponent {
  title = 'home-cafe-circle';

  constructor(private http: HttpClient) {}

  @ViewChild(MenuComponent) menuComponent!: MenuComponent;

  submitOrder(): void {
    this.http
      .get('http://sidewalks-imac.local:5001/health-check', {
        responseType: 'text',
      })
      .subscribe((buffer) => console.log(buffer));

    let body = {
      name: 'Dan',
      items: this.menuComponent.menuItemComponents
        .map((item, _1, _2) =>
          Array(item.quantity).fill({
            name: item.name,
          }),
        )
        .flat(),
    };

    this.http
      .post('http://sidewalks-imac.local:5001/order', body)
      .subscribe((_) => this.menuComponent.resetItems());
  }
}
