import { result } from './index';

test('test05', () => {
  expect(result.length).toBe(10);
  expect(result[0]).toBe(0);
  expect(result[1]).toBe(1);
  expect(result[2]).toBe(1);
  expect(result[3]).toBe(2);
  expect(result[4]).toBe(3);
  expect(result[8]).toBe(21);
  expect(result[9]).toBe(34);
});
