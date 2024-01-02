// Reading content of a file
const fs = require('fs')

// fs.readFile('./blog.txt', (err, data) => {
//     if(err){
//         console.log(err);
//     }
//     console.log(data.toString());
// })

// Writing to a file
// fs.writeFile('./blog.txt', 'hello world', () => {
//     console.log('file was written');
// })


// to creata a folder
// fs.mkdir('./assets', (err) => {
//     if(err){
//         console.log(err)
//     }
//     console.log('folder created');
// })


// fs.writeFile('./assets/newfile', 'this is the new file i created', () => {
//     console.log('im done')
// })

// delete files
if (fs.existsSync('./blog.txt')){
    fs.unlink('./blog.txt', (err) => {
        if (err){
            console.log(err)
        }
        console.log('file deleted');
    })
}