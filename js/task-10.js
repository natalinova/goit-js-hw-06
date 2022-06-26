function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const allConst = { 
  commonBlock: document.querySelector('#controls'),
  input: document.querySelector('input'),
  create: document.querySelector('[data-create]'),
  destroy: document.querySelector('[data-destroy]') 
}

allConst.create.addEventListener('click', createBoxes) 
function createBoxes() { 
  const amount = allConst.input.value;
  let arrayBlock = [];
  for (let i = 0; i < amount; i += 1) {
    const newItem = document.createElement('div');
    console.log(newItem);
    newItem.style.backgroundColor = getRandomHexColor();
    const sizeItem = 30 + i * 10;
    newItem.style.width = `${sizeItem}px`;
    newItem.style.height = `${sizeItem}px`;
    console.log(newItem);
    arrayBlock.push(newItem);
  }
  allConst.commonBlock.append(...arrayBlock);
}

allConst.destroy.addEventListener('click', destroyBlock)
function destroyBlock() {
  const arrayDestroy = allConst.commonBlock.querySelectorAll('div');
  arrayDestroy.forEach (itemForDestroy => itemForDestroy.remove()) 
}