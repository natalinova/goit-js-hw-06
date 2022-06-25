const formDescr = document.querySelector('.login-form');
formDescr.addEventListener('submit', formSubmit);
function formSubmit(event) {
    event.preventDefault();
    const {
    elements: { email, password }
} = event.currentTarget;
    if (email.value === "" || password.value === "") {
        alert("Заповніть всі дані!")
    };
        console.log(`Email: ${email.value}, password: ${password.value}`);
        event.currentTarget.reset();
}
