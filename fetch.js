// console.log('1111');
// console.log('2222');
// // setTimeout(() => console.log('aaaa'), 5000);
// // fetch as an asynchronous this one work at last 
// // same as settimeout work ai ta sobar pare kaj kore so kaj shese kaj kore 
// // ar jonnay ai ta ke asynchronus bole

// fetch('https://jsonplaceholder.typicode.com/todos/1')
//     .then(response => response.json())
//     .then(json => console.log(json))

// console.log('3333');
// console.log('4444');
// console.log('5555');
// for (let i = 0; i < 1000; i++) {
//     console.log(i);

// }
// alert how use 
console.log('i am coming ')
const motherComing = () => {
    alert('i am coming mama open the door dear jsut wait')
};


// confirm use how 
const askingPicnic = () => {
    const response = confirm('Are you going to picnic?');
    console.log(response);
    if (response === true) {
        alert('send bikash')
    }
    else {
        console.log('go to hell')
    }
};

// prompt how to use

const askName = () => {
    const name = prompt('what is you name?');
    if (name) {
        console.log(name)
    }
}