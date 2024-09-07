import { MenuItemComponent } from './menu-item.component';
import { FoodType } from '../food-type';

describe('MenuItem', () => {
  it('should create an instance', () => {
    expect(new MenuItemComponent('', FoodType.Drink, '')).toBeTruthy();
  });
});
