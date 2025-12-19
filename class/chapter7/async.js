// console.log(1);
// console.log(2);
// console.log(3);

// function Worker() {
//     return new Promise(function (resolve, reject) {
//         let sum = 0;
//         for (let i = 0; i < 10000000; i++) {
//             sum += i;
//         }
//         //console.log(sum);
//         resolve(sum);
//     });
// }
// Worker().then(result => console.log(result));
// console.log(4);
// console.log(5);

// function asyncworker(callback) {
//     setTimeout(function () {
//         callback();
//     }, 3000);
// }

// function sayHello() {
//     console.log("Hello!");
// }

//setTimeout(sayHello, 2000); //2초 후에 함수 실행
//setInterval(sayHello, 1000); //2초마다 함수 실행

// let IntevalHandle = setInterval(sayHello, 1000); //2초마다 함수 실행
// setTimeout(function () {
//     console.log("stopping...");
//     clearInterval(IntevalHandle); //인터벌 중지
// }, 5000);

function asyncworker() {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            console.log(2);
            resolve();
        }, 3000);
    });
}

    async function main() {
        console.log(1);
        await asyncworker(); //await 순서 보장
        console.log(3);
    }

    main();

// asynworker()
// .then(function () {
//     console.log("Async work completed!");
//     console.log(6);
// });

// function add(a, b) {
//     return a + b;
// }

// let add = (a,b) => {
//     return a + b;
// }

// let add = (a, b) => a + b;