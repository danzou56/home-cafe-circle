export class OrderItem {
  name: string;
  subItems: OrderItem[];

  constructor(name: string, subItems: OrderItem[] = []) {
    this.name = name;
    this.subItems = subItems;
  }
}
