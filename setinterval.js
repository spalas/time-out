console.log('first');
// setInterval(() => {
//     console.log('third')

// }, 3000);
let seconds = 0;
const timeId = setInterval(() => {
    // seconds++;
    seconds++;
    console.log(seconds);
    if (seconds > 20) {
        clearInterval(timeId)
    }

}, 1000);

console.log('second')