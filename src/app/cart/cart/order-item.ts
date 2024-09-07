export class OrderItem {
  private name: string;
  private subItems: OrderItem[];

  constructor(name: string, subItems: OrderItem[]) {
    this.name = name;
    this.subItems = subItems;
  }
}
