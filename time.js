// this  only for set time out function how to work

function dosomesThing() {
    console.log('i am conding javascript')
}
console.log('i am first');
console.log('i am second');
// setTimeout(dosomesThing, 3500);
setTimeout(function () {
    console.log('i am waiting for you')
}, 5000)
setTimeout(() => {
    console.log('exploring the article')
}, 4000)
console.log('i am thrist');
console.log('i am four');
