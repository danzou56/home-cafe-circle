import { Component, Input } from "@angular/core";
import { MatListModule } from "@angular/material/list";
import { MatButtonModule } from "@angular/material/button";
import { MatIconModule } from "@angular/material/icon";
import { OrderItem } from "./order-item";

@Component({
  selector: 'app-order-item',
  standalone: true,
  imports: [MatListModule, MatButtonModule, MatIconModule],
  templateUrl: './order-item.component.html',
  styleUrl: './order-item.component.css'
})
export class OrderItemComponent {
  @Input()
  orderItem!: OrderItem;
  @Input()
  index!: number;
  @Input()
  deleteCallback!: (index: number) => void;
}
