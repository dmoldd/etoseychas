let navMain = document.querySelector('.header');
let navToggle = document.querySelector('.header__burger');

navMain.classList.remove('header--nojs');

let showOrHideMenu = () => {  
  console.log('s');

  if (navMain.classList.contains('header--closed')) {
    navMain.classList.remove('header--closed');
    navMain.classList.add('header--opened');
  } else {
    navMain.classList.add('header--closed');
    navMain.classList.remove('header--opened');
  }
}

let foo = () => {
  navToggle.addEventListener('click', showOrHideMenu);
}

export {foo}
