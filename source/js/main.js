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

const sortObj = (obj) => {
  for (const [key, value] of Object.entries(obj)) {
    createListItem(key, value);
  }
}

const createList = (listName, obj) => {
  let list = document.createElement('ul');
  list.classList.add('parameters__item');
  list.appendChild(sortObj(obj[item]));
}

const createListItem = (param1, param2) => {
  let listItem = document.createElement('li');
  let itemParam1 = document.createElement('span');
  itemParam1.innerHTML = param1;
  let itemParam2 = document.createElement('span');
  itemParam2.innerHTML = param2;
  listItem.appendChild(itemParam1);
  listItem.appendChild(itemParam2);
  console.log(listItem);
  return listItem;
}

const createTitle = (titleName) => {
  let listTitle = document.createElement('h3');
  listTitle.classList.add('parameters__title');
  listTitle.innerHTML = titleName;
  mainList.appendChild(listTitle);
}

// createList(123);
createTitle(1234);

createCarParams(oka1111Mt29);

// sortObj(oka1111Mt29[главное]);