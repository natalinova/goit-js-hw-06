function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const allConst = {
  commonBlock: document.querySelector('#controls'),//подія на загальному div
  input: document.querySelector('input'),//форма вводу кількості елементів
  create: document.querySelector('[data-create]'),//створення div
  destroy: document.querySelector('[data-destroy]') //кнопка знищення div
}
console.log(allConst)//просто щоб перевірити що все створилось ок
allConst.input.addEventListener('input', onInputNumber); // слухач input 
function onInputNumber(event) {//
  const amount = event.currentTarget.value
  console.log(amount); // щоб побачити що виводиться правильне число - правильне, ок
  return amount // ну, я повертаю значення але це неправильно
}

allConst.create.addEventListener('click', createBoxes) 
function createBoxes(count) { // от я не знаю як вставити значення з попередньої функції сюди! 
// логічно, що не можу вставити - вона ж визначена в іншій функції а не глобально :(
  
  console.log(count) //
}

