const itemsList = document.querySelectorAll(".item");
console.log(itemsList);
console.log(`Number of categories: ${itemsList.length}`);
itemsList.forEach((itemOfList, index, array) => {
    console.log(`Category: ${itemOfList.querySelector('h2').textContent}`)
    console.log(`Elements: ${itemOfList.querySelectorAll('li').length}`)
})
