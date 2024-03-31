import { testPrismaClient } from './_utils/prismaUtil';
import { OrderProxy } from '../src/OrderProxy';
import { ProductProxy } from '../src/ProductProxy';
import { Db } from '../src/db';

describe('Proxy', () => {
  const db = new Db(testPrismaClient);

  afterEach(async () => {
    await db.clear();
  });

  test('product proxy', async () => {
    await db.storeProduct('ProxyTest1', 'ProxyTestName1', 456);

    const p = new ProductProxy('ProxyTest1');
    const price = await p.getPrice();
    expect(price).toBe(456);
    const name = await p.getName();
    expect(name).toBe('ProxyTestName1');
    const sku = await p.getSKU();
    expect(sku).toBe('ProxyTest1');
  });

  test('total', async () => {
    await db.storeProduct('wheaties', 'Wheaties', 349);
    await db.storeProduct('crest', 'Crest', 258);

    const p1 = new ProductProxy('wheaties');
    const p2 = new ProductProxy('crest');

    const od = await db.newOrder('testOrderProxy');
    const order = new OrderProxy(od.id);
    await order.addItem(p1, 1);
    await order.addItem(p2, 2);

    const total = await order.total();
    expect(total).toBe(349 + 258 * 2);
  });
});
