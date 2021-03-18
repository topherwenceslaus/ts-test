import { timeout } from './index';

test('test03', async () => {
  const time = 500;
  const now = new Date();
  
  const delayTime = await timeout(time);
  const delay = (new Date()).getTime() - now.getTime();

  expect(delayTime).toEqual(time);
  expect(delay).toBeGreaterThanOrEqual(time);
});
