/* eslint-disable linebreak-style */
process.stdout.write('hello from spinner1.js... \rheyyy\n');
setTimeout(() => {
  process.stdout.write('\r|   ');
}, 100);

setTimeout(() => {
  process.stdout.write('\r/   ');
}, 300);

setTimeout(() => {
  process.stdout.write('\r-   ');
}, 500);

setTimeout(() => {
  // Need to escape the backslash since it's a special character.
  process.stdout.write('\r\\   ');
}, 700);
setTimeout(() => {
  // Need to escape the forwardslash since it's a special character.
  process.stdout.write('\r/ \'\' ');
}, 900);
setTimeout(() => {
  process.stdout.write('\r \\/  ');
}, 1100);



/* eslint-disable linebreak-style */
process.stdout.write('hello from spinner1.js... \rheyyy\n');
let word = 'CODING';
let backSlashes = ['|','','-','\\','/','\\'];
for (let i = 0; i < word.length; i++) {
  const timeDelay = 100 * (i + 1);
  setTimeout(() => {
    process.stdout.write(`\r${backSlashes[i]}  ${word[i]} `);
  }, timeDelay);
}