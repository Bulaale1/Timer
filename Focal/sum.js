/* eslint-disable linebreak-style */
const addTwoNumbers = function() {
  const args = process.argv.slice(2);
  let sum = 0;
  for (let i = 0; i < args.length; i++) {
    if (isNaN(args[i])) {
      console.log('please enter two numbers');
      return;
    } else {
      sum += Number(args[i]);
    }
  }
  console.log(sum);
};
addTwoNumbers();