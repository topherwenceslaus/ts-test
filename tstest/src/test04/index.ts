/**
 * Refactor the following code to make it more reusable. What can be done with
 * the `withStringValue` and `withNumberValue` Functions?
 */

interface WithStringValue {
  foo: string;
}

interface WithNumberValue {
  foo: number;
}

interface WithValue {
  foo: string | number;
}

function withStringValue(foo: string): WithStringValue { 
  return { foo };
}

function withNumberValue(foo: number): WithNumberValue { 
  return { foo };
}

function withValue(foo: string | number): WithValue {
  return { foo };
}

const stringValue = 'Value';
const numberValue = 50;

export const result1 = withStringValue(stringValue).foo;
export const result2 = withNumberValue(numberValue).foo;
export const result3 = withValue(stringValue).foo;
export const result4 = withValue(numberValue).foo;
