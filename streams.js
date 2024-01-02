const fs = require('fs');

const writestream = fs.createWriteStream('./.blog.txt');
const readstream = fs.createReadStream('blogs.txt');

readstream.on('data', (chunk) => {
    console.log('-----NEW CHUNK------');
    console.log(chunk.toString());
    writestream('\nNEW CHUNK\n')
    writestream.write(chunk);
});

