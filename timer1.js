const beep = () => {
  process.stdout.write('\x07');
}
const makeBeep = (delay) => {
  if (delay > 0 && !isNaN(delay)) {
    setTimeout(() => {
      beep();
    }, delay * 1000); 
  }
}
const numbers = process.argv.slice(2);
for (let number of numbers) {
  makeBeep(number);
}