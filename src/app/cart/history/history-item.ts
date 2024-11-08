import { OrderItem } from '../order-item/order-item';

export interface HistoryItem extends OrderItem {
  readonly orderId: string;
  readonly timestamp: Date;
}
