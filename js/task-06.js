const textInput = document.querySelector('#validation-input');
textInput.addEventListener('blur', reviseCount);
function reviseCount() {

    const currentCount = Number(textInput.value.trim().split("").length);
    console.log(currentCount)
    console.log(Number(textInput.dataset.length))
    if (currentCount === Number(textInput.dataset.length)) {
        textInput.classList.add('valid');
        textInput.classList.remove('invalid');

    }
    else if (currentCount !== textInput.dataset.length){
        textInput.classList.remove('valid')
        textInput.classList.add('invalid')
    }
    
}