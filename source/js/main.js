import { foo } from "./burger-opener.js";
import { oka1111Mt29 } from "./params.js";

foo();

const mainList = document.querySelector('.parameters').querySelector('.container');

console.log(mainList);

const createCarParams = (obj) => {
  for (let item in obj) {
    createTitle(item);
    createList(item, obj[item]);
  }
}

const createList = (listName, obj) => {
  let list = document.createElement('p');
  list.classList.add('parameters__item');
  list.innerHTML = listName;
  for (let item in obj) {
    let
  }
}

const createTitle = (titleName) => {
  let listTitle = document.createElement('h3');
  listTitle.classList.add('parameters__title');
  listTitle.innerHTML = titleName;
  mainList.appendChild(listTitle);
}

createList(123);
createTitle(1234);

createCarParams(oka1111Mt29);