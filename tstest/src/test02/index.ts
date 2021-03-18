/**
 * Implement the `findSecondHighest` Function which finds the second
 * highest number in an Array of numbers.
 */

const findSecondHighest = (data: number[]): number => {
  // Replace with actual implementation here.

  // const max = Math.max(...data);
  
  // console.log(max);
  // // 101

  // const diffData = data.map(item => max - item).filter(Boolean);

  // console.log(diffData);
  // // [ 91, 100, 99, 98, 97, 96 ]

  // const min = Math.min(...diffData);
  // const secondHighestIndex = diffData.indexOf(min);

  // return diffData[secondHighestIndex];

  let max = data[0];
  let secondMax = data[0];

  for (let i = 1; i < data.length; i++) {
    if (data[i] > max) {
      secondMax = max;
      max = data[i];
    }
  }

  return secondMax;
};

export const result = findSecondHighest([10, 101, 1, 2, 3, 4, 5]);
