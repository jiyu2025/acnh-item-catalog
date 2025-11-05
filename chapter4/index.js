function changeTitle() {
let titleElemnt = document.querySelector('#title');
titleElemnt.innerHTML = '우아 바꼈네';
}

let eventTestButton = document.querySelector('#eventTestButton');
eventTestButton.addEventListener('click', changeTitle);

let addHandsomeButton = document.querySelector('#addHandsomeButton');
addHandsomeButton.addEventListener('click', () => {
    let ulElement = document.querySelector('ul');
    let newLi = document.createElement('li');
    newLi.textContent = '차은우';
    ulElement.appendChild(newLi);
});