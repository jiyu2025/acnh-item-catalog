let lotto = [];

while (lotto.length < 6) {
    let num = Math.floor(Math.random() * 45) + 1;

    let isDuplicate = false;
    for (let i = 0; i < lotto.length; i++) {
        if (lotto[i] === num) {
            isDuplicate = true;
            break;
        }
    }
    if (isDuplicate === false) {
        lotto.push(num);
    }
}
lotto.sort((a, b) => a - b);
console.log(lotto);