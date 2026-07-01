const { greet, farewell } = require('./index');

let passed = 0;
let failed = 0;

function assert(description, actual, expected) {
  if (actual === expected) {
    console.log(`  ✓ ${description}`);
    passed++;
  } else {
    console.log(`  ✗ ${description}`);
    console.log(`    expected: ${expected}`);
    console.log(`    got:      ${actual}`);
    failed++;
  }
}

console.log('greet()');
assert('no args returns default', greet(), 'Hello, World!');
assert('with name', greet('Alice'), 'Hello, Alice!');

console.log('farewell()');
assert('no args returns default', farewell(), 'Goodbye, World!');
assert('with name', farewell('Alice'), 'Goodbye, Alice!');

console.log(`\n${passed} passed, ${failed} failed`);
if (failed > 0) process.exit(1);
