const fs = require('fs');

fs.writeFile(
    './info-callback.txt', 
    'Hello world with callback',
    (error) => {
        if(error) {
            throw new Error(`Error in the creation of the file: ${error}`)
        }
        fs.readFile('./info-callback.txt', 'utf-8', (error, content) => {
            if(error) {
                throw new Error(`Error in the creation of the file: ${error}`)
            }
            console.log(content);

            fs.appendFile('./info-callback.txt', '\nMore content2', (error) =>{
                if(error) {
                    throw new Error(`Error in the updating of the file: ${error}`)
                }
                fs.readFile('./info-callback.txt', 'utf-8', (error, content) => {
                    if(error) {
                        throw new Error(`Error in the reading of the file: ${error}`)
                    }
                    console.log(content);

                    fs.unlink('./info-callback.txt', (error) => {
                        if(error) {
                            throw new Error(`Error in the elimination of the file: ${error}`)
                        }
                    })
                })
            })
        })
    }
    )