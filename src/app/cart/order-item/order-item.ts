export interface OrderItem {
  readonly name: string;
  readonly subItems?: OrderItem[];
}
