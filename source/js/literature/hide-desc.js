const descButton = document.querySelectorAll('.literature__item-btn-hide');
const mediaQuery = window.matchMedia('(max-width: 1060px)');

const renderDesc = (evt) => {
  if (evt.target.textContent === 'Подробнее...') {
    evt.target.textContent = 'скрыть';
    console.log(evt.target.parentNode.childNodes.forEach((desc) => console.log(desc)));
  } else {
      evt.target.textContent = 'Подробнее...';
    }
  }

const hideOrShowDesc = () => {
  const descriptions = document.querySelectorAll('.literature__item-desc');
  const shortDescriptions = document.querySelectorAll('.literature__item-desc--short');
  const descButtons = document.querySelectorAll('.literature__item-btn-hide');
  
  if (mediaQuery.matches) {
    descriptions.forEach((item) => item.classList.add('visually-hidden'));
    shortDescriptions.forEach((item) => item.classList.remove('visually-hidden'));
    descButtons.forEach((item) => item.classList.remove('visually-hidden'));

    descButtons.forEach((element) => element.addEventListener('click', renderDesc));
  }
}

export {hideOrShowDesc};