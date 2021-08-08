// async/await

const fs = require('fs').promises;

const reader = async (filename) => {
    try {
        const result = await fs.readFile(filename, 'utf-8')
        console.log(result)
    } catch(err) {
        console.log(err)
    }
}

reader('./test.csv')