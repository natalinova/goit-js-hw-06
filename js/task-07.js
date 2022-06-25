const changeFont = document.querySelector('#font-size-control');
const textForChange = document.querySelector('#text');
changeFont.addEventListener('input', changeFontSize)
function changeFontSize(event) {
    textForChange.style.fontSize = `${event.currentTarget.value}px`;
}