# tstest
 
General JavaScript
Implement `sum` function https://stackblitz.com/edit/typescript-g5aj5c
He used `reduce` correctly, although he had to look up the function’s signature.

Follow-up question: Implement `Array.prototype.some` function with `reduce`

He did not know native `some` function, so he had to look it up. He did not provide a full and elegant implementation but he showed on a quick example what can be done inside reduce to achieve that (OR operator used consecutively).

Find second highest number in an array https://stackblitz.com/edit/typescript-ijvnn9
He provided a good answer by using `sort`.

Follow-up question: How different is `sort` function from `map`, `filter`, etc.? What is the most common pitfall when chaining `sort` with other similar functions?

He did not know that `sort` modifies array in place rather than returning a new array.

Implement promisified version of `setTimeout` https://stackblitz.com/edit/typescript-pjgu7p
He provided a good answer in a couple of minutes.

(The answer was however basically identical to what can be found in first google links…)

Follow-up question 1: How can we run an array of promises in parallel?

He used `Promise.all` correctly.

Follow-up question 1: How can we run an array of promises in a sequential manner?

He said he would do that with a loop and async / await. He failed however to provide an example implementation. He used `forEach` loop directly on an array of promises and `await` inside the callback.

In addition to this obvious flaw, there were also some syntax issues with his usage of async / await too.

TypeScript
Comment on the following block of code and suggest a better solution https://stackblitz.com/edit/typescript-hkzafj
He proposed doing it with “pipe” operator (term he used for union types). I suggested that this is an OK answer but it can be done in a more generic way. He proposed using type generics.

He had to google syntax but he provided a good answer afterwards.
