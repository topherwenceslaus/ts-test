import { result1, result2, result3, result4 } from './index';

test('test04', () => {
  expect(result1).toBe(result3);
  expect(result2).toBe(result4);
});
