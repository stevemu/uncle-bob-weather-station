import { db } from '../src/db';

describe('db', () => {
  beforeEach(async () => {
    await db.clear();
  });

  it('store product', async () => {
    await db.storeProduct('9999', 'MyProduct', 1234);
    const retrievedProduct = await db.getProduct('9999');
    expect(retrievedProduct).toEqual({
      sku: '9999',
      name: 'MyProduct',
      price: 1234,
    });
    await db.deleteProduct('9999');
  });

  test('order key generation', async () => {
    const o1 = await db.newOrder('bob');
    const o2 = await db.newOrder('bill');
    expect(o1.id + 1).toBe(o2.id);
  });

  test('store item', async () => {
    await db.storeItem(1, 3, 'sku');
    const items = await db.getItemsForOrder(1);
    expect(items).toHaveLength(1);
    expect(items).toEqual([
      {
        orderId: 1,
        sku: 'sku',
        quantity: 3,
      },
    ]);
  });

  test('no items for order', async () => {
    const items = await db.getItemsForOrder(1);
    expect(items).toHaveLength(0);
  });

  test('store order', async () => {
    await db.newOrder('bob');
    const o = await db.getOrder(1);
    expect(o).toEqual({
      id: 1,
      customerId: 'bob',
    });
  });
});
