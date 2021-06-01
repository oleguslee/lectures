function request() {
    return new Promise((resolve, reject) => {
        setTimeout(
            () => {
                const randomNumber = Math.random()
                if (randomNumber > 0.5) {
                    resolve({message: 'success', number: randomNumber});
                } else {
                    reject('error');
                }
            }, 0)
    })
}

request()
    .then((data) => {
        console.log(data.message, data.number)
        return data
    })
    .then((data) => {
        console.log('second step', data)
    })
    .catch((err) => {
        console.log(err)
    })
    .finally(() => {
        console.log('finally')
    })
