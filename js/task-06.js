const textInput = document.querySelector('#validation-input');
textInput.addEventListener('blur', reviseCount);
function reviseCount(event) {
    console.log(`Кількість символів: ${Number(event.currentTarget.value.trim().split("").length)}`)
    console.log(`Встановлена кількість символів ${ textInput.dataset.length }`)
    if (Number(event.currentTarget.value.trim().split("").length) === Number(textInput.dataset.length)) {
        textInput.classList.add('valid');

    }
    else {
        textInput.classList.add('invalid')
    }
    
}