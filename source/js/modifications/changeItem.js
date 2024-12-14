import { createCarParams } from "./render.js";
import { oka1111Mt29, oka11113Mt33, oka11115Mt37, oka11116Mt53, oka11301Mt49 } from "./data.js";

const carsList = document.querySelectorAll('.parameters__list-title');

function focusOnCar(car) {
  for (let car of carsList) {
    if (car.classList.contains('parameters__list-title--focused')) {
      car.classList.remove('parameters__list-title--focused');
    }
  }

  car.target.classList.add('parameters__list-title--focused');

  if (document.querySelector('.parameters__car')) {
    document.querySelector('.parameters__car').innerHTML = '';
  } 


  if (car.target.dataset.id === 'oka1111Mt29') {
    setTimeout(() => createCarParams(oka1111Mt29), 200);
} else if (car.target.dataset.id === 'oka11116Mt53') {
    setTimeout(() => createCarParams(oka11116Mt53), 200);
} else if (car.target.dataset.id === 'oka11113Mt33') {
    setTimeout(() => createCarParams(oka11113Mt33), 200);
} else if (car.target.dataset.id === 'oka11115Mt37') {
    setTimeout(() => createCarParams(oka11115Mt37), 200);
} else if (car.target.dataset.id === 'oka11301Mt49') {
    setTimeout(() => createCarParams(oka11301Mt49), 200);
  }
}

const chooseItem = () => {
  for (let car of carsList) {
    car.addEventListener('click', focusOnCar);
  }
}

export {chooseItem};
