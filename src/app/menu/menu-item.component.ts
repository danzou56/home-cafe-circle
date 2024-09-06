import { FoodType } from './food-type';
import { Component, Input } from '@angular/core';
import { MatButton } from '@angular/material/button';
import {
  MatListItem,
  MatListItemLine,
  MatListItemTitle,
} from '@angular/material/list';
// import {CommonModule} from "@angular/common";

@Component({
  selector: 'app-menu-item',
  standalone: true,
  imports: [
    // CommonModule,
    MatButton,
    MatListItemLine,
    MatListItemTitle,
    MatListItem,
  ],
  templateUrl: './menu-item.component.html',
})
export class MenuItemComponent {
  @Input()
  name!: string;
  @Input()
  tipe!: FoodType;
  @Input()
  description!: string;

  quantity: number = 0;

  resetQuantity(): void {
    this.quantity = 0;
  }

  plus(): void {
    this.quantity++;
  }

  minus(): void {
    if (this.quantity > 0) this.quantity--;
  }
}
