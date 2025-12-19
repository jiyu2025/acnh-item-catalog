let handsomePeople = ['차은우', '박보검', '서강준'];
console.log(handsomePeople[0]);
console.log(handsomePeople[1]);

for(let i = 0; i < 3; i++) {
    console.log(handsomePeople[i]);
} 

handsomePeople.push('김우빈');
console.log(handsomePeople[handsomePeople.length - 1]);
handsomePeople.pop();
console.log(handsomePeople[handsomePeople.length - 1]);

// let length = handsomePeople.length;
// for(let i = 0; i < length; i++) {
//     handsomePeople.pop();
// }
// console.log(handsomePeople);

handsomePeople.sort();
console.log(handsomePeople);

let numbers = [33, 18, 25, 32, 11];
function compare(a, b) {
    if(a < b) {
    return -1;

    if(a` > b) {
        return 1;
    }
    return 0;
}

numbers.sort();
console.log(numbers);