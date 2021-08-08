const timer1 = (time) => new Promise((res, rej) => {
        setTimeout(() => {
            res(time)
        }, time)
    })

const timer2 = (time) => new Promise((res, rej) => {
        setTimeout(() => {
            res(time)
        }, time)
    })

const timer3 = (time) => new Promise((res, rej) => {
        setTimeout(() => {
            res(time)
        }, time)
    })


Promise.all([timer1(1000), timer2(2000), timer3(3000)])
    .then((result) => {
        console.log(result)
    })


