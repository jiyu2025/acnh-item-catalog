let randomValue = Math.random();
let floorValue = Math.floor(randomValue); //반내림
let roundValue = Math.round(randomValue); //반올림
let ceilValue = Math.ceil(randomValue); //올림
console.log('random', randomValue);
console.log('floor', floorValue);
console.log('round', roundValue);
console.log('ceil', ceilValue);

//1~10 랜덤 정수
//floor (0 ~ 9) + 1
Math.floor(Math.random() *10) + 1;
console.log('1~10', randomValue);

function getRandomInt(max) {
    return Math.floor(Math.random() * max) + 1;
}