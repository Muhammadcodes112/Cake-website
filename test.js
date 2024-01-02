// const name = 'funguy';

// console.log(name);

// const greet = (name) => {
//     console.log(`hello, ${name}`);
// }
// greet('funguy');
// greet('muhammad');

// setInterval(() => {
//     console.log("welcome," + name)
// }, 3000)

// console.log(global);

// setTimeout(() => {
//     console.log("This is + {3} + seconds")
// }, 3000);

// const int = setInterval(() => {
//     console.log('In the Interval');
// }, 1000);

// console.log(__dirname);


// const newArray = require('./index')

// console.log(newArray)

// const os = require('os');
// console.log(os.platform(), os.homedir());


const fs = require('fs');
fs.readFile('./blog.txt', (err, data) => {
    if(err)
        console.log(err)
    console.log(data.toString())
})