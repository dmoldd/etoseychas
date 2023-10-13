let navMain = document.querySelector('.nav-list');
let navToggle = document.querySelector('.nav-list__burger');

navMain.classList.remove('nav-list--nojs');

navToggle.addEventListener('click', function () {
  if (navMain.classList.contains('nav-list--closed')) {
    navMain.classList.remove('nav-list--closed');
    navMain.classList.add('nav-list--opened');
  } else {
    navMain.classList.add('nav-list--closed');
    navMain.classList.remove('nav-list--opened');
  }
});
