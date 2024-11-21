import { openCloseBurger } from "./burger-opener.js";
import { oka1111Mt29, oka11113Mt33, oka11116Mt37, oka11113Mt35, oka11116Mt53, oka11301Mt49 } from "./modifications/data.js";
import { createCarParams } from "./modifications/render.js";

openCloseBurger();

const carsList = document.querySelectorAll('.parameters__list-title');


// const unfocusAllCars = () => {
//   for (let car of carsList) {
//     if (car.classList.contains)
//   }
// }

function focusOnCar(car) {
  console.log(car.target.classList);
  car.target.classList.add('parameters__list-title--focused');
}

const chooseItem = () => {
  for (let car of carsList) {
    car.addEventListener('click', focusOnCar);
  }
}

chooseItem();

createCarParams(oka1111Mt29);
