const fs = require('fs');

const asyncOperationFiles = async() => {
    try {
        await fs.promises.writeFile('./fs-promises.txt', 'hello from promises');

        let result = await fs.promises.readFile('./fs-promises.txt', 'utf-8');
        console.log(result);

        await fs.promises.appendFile('./fs-promises.txt', '\nMore content');

        result = await fs.promises.readFile('./fs-promises.txt', 'utf-8');

        console.log(result);

        await fs.promises.unlink('./fs-promises.txt')
    } catch (error) {
        console.log(error);
    }
    
}
asyncOperationFiles();