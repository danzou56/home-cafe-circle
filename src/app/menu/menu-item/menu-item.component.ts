import { FoodType } from '../food-type';
import { Component, Input } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-menu-item',
  standalone: true,
  imports: [MatListModule, MatButtonModule, MatIconModule],
  templateUrl: './menu-item.component.html',
  styleUrl: './menu-item.component.css',
})
export class MenuItemComponent {
  @Input()
  name!: string;
  @Input()
  tipe!: FoodType;
  @Input()
  description!: string;
  @Input()
  radios: MenuItemRadio[] = [];

  @Input()
  addCallback!: (menuItem: MenuItemComponent) => void;
}

export class MenuItemRadio {
  name: string;
  options: string[];
  constructor(name: string, ...options: string[]) {
    this.name = name;
    this.options = options;
  }
}
