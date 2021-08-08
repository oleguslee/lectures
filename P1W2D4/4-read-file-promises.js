const fs = require('fs').promises;

fs.readFile('./test.csv', 'utf-8')
    .then((data) => {
        console.log(data)
        return data += ' updated'
    })
    .then((updatedData) => {
        fs.writeFile('./updated.csv', updatedData)
    })
    .catch((err) => {
        console.log(err)
    })
 