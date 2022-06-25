const itemList = {
  buttonSetColor: document.querySelector('.change-color'),
backgroundSquare: document.querySelector('.widget'),
nameColor:document.querySelector('.color'),
}
 
itemList.buttonSetColor.addEventListener('click', onButtonClick);

function onButtonClick() {
  const randomColor = getRandomHexColor();
  itemList.backgroundSquare.style.backgroundColor = randomColor; 
  itemList.nameColor.textContent = randomColor;
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
