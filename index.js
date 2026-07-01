function greet(name) {
  if (!name) return 'Hello, World!';
  return `Hello, ${name}!`;
}

function farewell(name) {
  if (!name) return 'Goodbye, World!';
  return `Goodbye, ${name}!`;
}

module.exports = { greet, farewell };

// Run directly
if (require.main === module) {
  console.log(greet('Node'));
  console.log(farewell('Node'));
}
