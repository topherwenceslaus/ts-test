/**
 * Implement a `timeout` Function which is a Promisified version of setTimeout.
 * It should accept a number (in ms) as an argument and return a 'thenable' Function.
 */

export const timeout = (time: number): Promise<number> => {
  // Replace with actual implementation here.

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(time);
    }, time);
  });
}

const delayTimeMilliseconds = 500;

timeout(delayTimeMilliseconds).then((time) => {
  console.log(`After ${time} ms`);
});
