const fs = require('fs');
    
const reader = new Promise((res, rej) => {
    fs.readFile('./test.csv', 'utf-8', (err, result) => {
        if (err) {
            rej(err)
        } else {
            res(result)
        }
    })
})

reader.then((data) => {
    console.log(data)
    return data += ' updated'
    }).then((updated) => {
        fs.writeFile('./updated.csv', updated, () => {})
    })
    .catch((err) => {
        console.log(err)
    })