import test from 'ava';

// Low fidelity polyfill for Array.includes, which isn't in Node 5.x.
// Ignore the man behind the curtain...
if (!('includes' in Array.prototype)) {
  Array.prototype.includes = function(x) { return this.indexOf(x) > -1 };
}

test('ES7 defines an exponentiation operator', t => {
  t.is(3 ** 2, 9);
});

test('ES7 defines an includes operator', t => {
  t.true(['foo', 'bar', 'baz'].includes('foo'));
});

// ============================================================================

// REVIEW:
// - The entirety of ES7 / ES2016 fits in a tweet: `x ** y` and `[].includes`.
// Async/await?
