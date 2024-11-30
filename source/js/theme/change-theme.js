const page__body = document.querySelector('.page__body');
let themeButton = document.querySelector('.theme-button');
const carImg = document.querySelector('.parameters__car-img');

const changeThemeHandler = () => {  
  if (page__body.classList.contains('page__body--black-theme')) {
    page__body.classList.remove('page__body--black-theme');
    themeButton.style.backgroundImage = "url('./../../img/theme/dark-theme.png')";
    } else {
      page__body.classList.add('page__body--black-theme');
      themeButton.style.backgroundImage = "url('./../../img/theme/light-theme.png')";
      // carImg.src = "./img/parameters/vaz1111graph1__black.png";
      }
    }
    
const changeTheme = () => {
  page__body.classList.remove('page__body--nojs');
  themeButton.addEventListener('click', changeThemeHandler);
}

export {changeTheme};
