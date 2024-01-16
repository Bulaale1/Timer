/* eslint-disable linebreak-style */
process.stdout.write('hello from spinner1.js... \rheyyy\n');
setTimeout(() => {
  process.stdout.write('\r|  C ');
}, 100);

setTimeout(() => {
  process.stdout.write('\r/  O');
}, 300);

setTimeout(() => {
  process.stdout.write('\r-   d');
}, 500);

setTimeout(() => {
  // Need to escape the backslash since it's a special character.
  process.stdout.write('\r\\  I ');
}, 700);
setTimeout(() => {
  // Need to escape the backslash since it's a special character.
  process.stdout.write('\r\\  N ');
}, 800);
setTimeout(() => {
  // Need to escape the backslash since it's a special character.
  process.stdout.write('\r\\  G');
}, 900);