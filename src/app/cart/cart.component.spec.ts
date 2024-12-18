import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CartComponent } from './cart.component';

describe('CartComponent', () => {
  let component: CartComponent;
  let fixture: ComponentFixture<CartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CartComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should make an order with empty sub items', () => {
    let orderObject = CartComponent.makeOrder('foo', [{ name: 'bar' }]);

    expect(orderObject).toBe({
      name: 'foo',
      items: [{ name: 'bar' }],
    });
  });

  it('should make an order with sub items', () => {
    let orderObject = CartComponent.makeOrder('foo', [
      { name: 'bar', subItems: [{ name: 'baz' }] },
    ]);

    expect(orderObject).toBe({
      name: 'foo',
      items: [{ name: 'bar', sub_items: { name: 'baz' } }],
    });
  });
});
