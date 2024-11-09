let navMain = document.querySelector('.header__menu');
let navToggle = document.querySelector('.header__menu-burger');

navMain.classList.remove('header__menu--nojs');

let showOrHideMenu = () => {  
  console.log('s');

  if (navMain.classList.contains('header__menu--closed')) {
    navMain.classList.remove('header__menu--closed');
    navMain.classList.add('header__menu--opened');
  } else {
    navMain.classList.add('header__menu--closed');
    navMain.classList.remove('header__menu--opened');
  }
}

let foo = () => {
  navToggle.addEventListener('click', showOrHideMenu);
}

export {foo}
