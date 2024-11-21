const mainContainer = document.querySelector('.parameters').querySelector('.container');
const blockOfCarParams = document.createElement('div');
const carPicture = document.createElement('img');

const createCarParams = (obj) => {
  blockOfCarParams.classList.add('parameters__car');
  carPicture.classList.add('parameters__car-img');
  carPicture.src = `./img/parameters/vaz1111graph1.png`;
  blockOfCarParams.appendChild(carPicture);
  for (let item in obj) {
    createList(item, obj[item]);
  }
  mainContainer.appendChild(blockOfCarParams);
}

const sortObj = (obj, list) => {
  for (const [key, value] of Object.entries(obj)) {
    list.appendChild(createListItem(key, value));
  }
}

const createList = (titleName, obj) => {
  let list = document.createElement('ul');
  list.classList.add('parameters__item');
  if (titleName === 'Главное') {
    list.classList.add('parameters__item--main');
  }
  let listTitle = document.createElement('h3');
  listTitle.classList.add('parameters__item-title');
  listTitle.innerHTML = titleName;

  blockOfCarParams.appendChild(list);
  list.appendChild(listTitle);
  sortObj(obj, list);
}

const createListItem = (param1, param2) => {
  let listItem = document.createElement('li');
  listItem.classList.add('parameters__item-value')
  let itemParam1 = document.createElement('span');
  itemParam1.innerHTML = `${param1}: `;
  let itemParam2 = document.createElement('span');
  itemParam2.innerHTML = param2;
  listItem.appendChild(itemParam1);
  listItem.appendChild(itemParam2);
  return listItem;
}

export {createCarParams};

