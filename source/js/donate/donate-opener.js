const donateOpener = document.querySelector('.footer__donate');
const donateWindow = document.querySelector('.donate');

const openDonateWindow = () => {
  donateWindow.classList.remove('visually-hidden');
}

const openCloseDonateWindow = () => {
  donateOpener.addEventListener('click', openDonateWindow);
}

export {openCloseDonateWindow};
