const messageInput = document.querySelector('#name-input');
const messageOutput = document.querySelector("span#name-output");
messageInput.addEventListener('input', onInputText)

function onInputText(event) {
    messageOutput.textContent = event.currentTarget.value.trim();
    if (messageOutput.textContent === "") {
        messageOutput.textContent = "Anonymous"
    }
}