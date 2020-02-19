module.exports = function reverse (n) {
  if ( n < 0) n = n * -1;
  const result = n.toString().split('').reverse().join('');
  return result;
}
