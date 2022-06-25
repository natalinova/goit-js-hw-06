const itemsList = document.querySelectorAll(".item");
console.log(itemsList);
console.log(`Number of categories: ${itemsList.length}`);
itemsList.forEach((itemOfList) => {
    console.log(`Category: ${itemOfList.firstElementChild.textContent}`)
    console.log(`Elements: ${itemOfList.querySelectorAll('li').length}`)
})
