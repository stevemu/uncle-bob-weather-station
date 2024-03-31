import { OrderImp } from '../src/OrderImp';
import { ProductImp } from '../src/ProductImp';

describe('Order', () => {
  it('should add items', async () => {
    const order = new OrderImp('1');

    const toothpaste = new ProductImp('1', 'toothpaste', 1299);
    order.addItem(toothpaste, 1);
    const total = await order.total();
    expect(total).toBe(1299);

    const mouthwash = new ProductImp('2', 'mouthwash', 342);
    order.addItem(mouthwash, 2);
    const total2 = await order.total();
    expect(total2).toBe(1299 + 342 * 2);
  });
});
