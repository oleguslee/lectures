
function request(success, error) {
    const randomNumber = Math.random()
    if (randomNumber > 0.5) {
        success(randomNumber);
    } else {
        error(randomNumber);
    }
}

function errorHandler(randomNumber) {
    console.log('error', randomNumber)
}

function successHandler(randomNumber) {
    console.log('success', randomNumber)
}

request(successHandler, errorHandler)