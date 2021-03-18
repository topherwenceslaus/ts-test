/**
 * Perform the following three steps, and return the result:
 * 
 * 1. Transform the data:
 *    a. Add 1 to even numbers in the list.
 *    b. Subtract 1 from odd numbers in the list.
 * 2. Filter the data in the list (i.e., using results from #1):
 *    a. Remove items less than 3.
 * 3. Summarize (add up) the data in the list (i.e., using results from #2).
 *    SUM(), =SUM(...)
 */

const calculate = (data: number[]): number => {
  // Replace with actual implementation here.

  const transformedData = data.map(item => item % 2 === 0 ? item + 1 : item - 1);

  console.log(transformedData);
  // [ 1, 0, 0, 3, 2, 4, 9, 12 ]

  const filteredData = transformedData.filter(item => item > 2);
  
  console.log(filteredData);
  // [ 3, 4, 9, 12 ]

  const result = filteredData.reduce((acc, curr) => acc + curr, 0);

  return result;
};

export const result = calculate([0, 1, 1, 2, 3, 5, 8, 13]);
