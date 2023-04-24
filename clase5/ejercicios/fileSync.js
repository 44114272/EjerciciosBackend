const fs = require('fs');

fs.writeFileSync('./example.txt', 'hello world 5');

if(fs.existsSync('./example.txt')){
    let content = fs.readFileSync('./example.txt', 'utf-8');
    console.log(content);

    fs.appendFileSync('./example.txt', '\nMás contenido');

    content = fs.readFileSync('./example.txt', 'utf-8');
    console.log(content);

    fs.unlinkSync('./example.txt');
}

 