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