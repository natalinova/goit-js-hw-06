const changeFont = document.querySelector('#font-size-control');
const textForChange = document.querySelector('#text');
textForChange.style.fontSize = `${changeFont.value}px`;
changeFont.addEventListener('input', changeFontSize)
function changeFontSize(event) {
    textForChange.style.fontSize = `${event.currentTarget.value}px`;
} 