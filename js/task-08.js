const formDescr = document.querySelector('.login-form');
formDescr.addEventListener('submit', formSubmit);
function formSubmit(event) {
    event.preventDefault();
    const {
    elements: { email, password }
} = event.currentTarget;
    if (email.value !== "" & password.value !== "") {
        console.log(`Email: ${email.value}, password: ${password.value}`);
        event.currentTarget.reset();
    }
    else {
        alert("Заповніть всі дані!")
    }
}
