import { test01, test02, test03, test04, test05 } from './index';

test('test06', async () => {
  const delayedTime = await test03.timeout(100);

  expect(test01.result + test02.result).toBe(38);
  expect(`${test04.result3} = ${delayedTime}`).toBe('Value = 100');
  expect(test04.result4 + test05.result[9]).toBe(84);
});

