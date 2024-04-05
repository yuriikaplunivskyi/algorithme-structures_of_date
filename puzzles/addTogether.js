/* [en]
Arguments Optional

Create a function that sums two arguments together. If only one argument is provided, then return a function that expects one argument and returns the sum.

For example, addTogether(2, 3) should return 5, and addTogether(2) should return a function.

Calling this returned function with a single argument will then return the sum:

var sumTwoAnd = addTogether(2);

sumTwoAnd(3) returns 5.

If either argument isn't a valid number, return undefined.
*/

function addTogether(...args) {
  const [a, b] = args;
  if (typeof a !== 'number' || (args.length > 1 && typeof b !== 'number')) {
    return undefined;
  }

  if (b !== undefined) {
    return a + b;
  }

  return function(c) {
    if (typeof c !== 'number') {
      return undefined;
    }
    return a + c;
  };
}

console.log(addTogether(5, undefined));

