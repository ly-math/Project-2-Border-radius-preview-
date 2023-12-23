const topLeftInput = document.querySelector('.top-left');
const topRightInput = document.querySelector('.top-right');
const bottomLeftInput = document.querySelector('.bottom-left');
const bottomRightInput = document.querySelector('.bottom-right');

const box = document.querySelector('.box');

const copyBtn = document.querySelector('.copy-btn');
const copyText1 = document.querySelector('.copy-text1');
const copyText2 = document.querySelector('.copy-text2');
const copyText3 = document.querySelector('.copy-text3');
const copyText4 = document.querySelector('.copy-text4');

function topLeft() {
    const value = topLeftInput.value;

    box.style.borderTopLeftRadius = `${value}px`;
    copyText1.innerHTML = `border-top-left-radius: ${value}px;`;
    
}
function topRight() {
    const value = topRightInput.value;

    box.style.borderTopRightRadius = `${value}px`;
    copyText2.innerHTML = `border-top-right-radius: ${value}px;`;
    
}
function bottomLeft() {
    const value = bottomLeftInput.value;

    box.style.borderBottomLeftRadius = `${value}px`;
    copyText3.innerHTML = `border-bottom-left-radius: ${value}px;`;
    
}
function bottomRight() {
    const value = bottomRightInput.value;

    box.style.borderBottomRightRadius = `${value}px`;
    copyText4.innerHTML = `border-bottom-right-radius: ${value}px;`;
    
}

copyBtn.addEventListener('click', ()=> {
    const value = `border-top-left-radius: ${topLeftInput.value}px;
    border-top-right-radius: ${topRightInput.value}px;
    border-bottom-left-radius: ${bottomLeftInput.value}px;
    border-bottom-right-radius: ${bottomRightInput.value}px;`;
    navigator.clipboard.writeText(value);
});

