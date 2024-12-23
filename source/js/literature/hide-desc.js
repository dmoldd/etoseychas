const descButton = document.querySelectorAll('.literature__item-btn-hide');
const mediaQuery = window.matchMedia('(max-width: 1060px)');

const renderDesc = (evt) => {
  if (evt.target.textContent === 'Подробнее...') {
    evt.target.textContent = 'скрыть';
    evt.target.parentNode.childNodes.forEach(function(desc) {
      if (desc.className === 'literature__item-desc visually-hidden') { desc.classList.remove('visually-hidden'); desc.style.margin = '0' }
      else if (desc.className === 'literature__item-desc--short') {desc.classList.add('visually-hidden') }
      else if (desc.className === 'literature__item-img') {desc.classList.add('visually-hidden'); desc.style.height = '0px' }
      else if (desc.className === 'literature__item-title') {desc.classList.add('visually-hidden'); }
    });
    
  } else {
      evt.target.textContent = 'Подробнее...';
      evt.target.parentNode.childNodes.forEach(function(desc) {
        if (desc.className === 'literature__item-desc') { desc.classList.add('visually-hidden') }
        else if (desc.className === 'literature__item-desc--short visually-hidden') {desc.classList.remove('visually-hidden') }
        else if (desc.className === 'literature__item-img visually-hidden') {desc.classList.remove('visually-hidden'); desc.style.height = 'auto' }
      });
    }
  }

const hideOrShowDesc = () => {
  const bookDescriptions = document.querySelectorAll('.literature__item-desc');
  const bookTypes = document.querySelectorAll('.literature__item-type');
  const bookPubs = document.querySelectorAll('.literature__item-izdat');
  const shortDescriptions = document.querySelectorAll('.literature__item-desc--short');
  const descButtons = document.querySelectorAll('.literature__item-btn-hide');
  
  if (mediaQuery.matches) {
    bookDescriptions.forEach((item) => item.classList.add('visually-hidden'));
    bookTypes.forEach((item) => item.classList.add('visually-hidden'));
    bookPubs.forEach((item) => item.classList.add('visually-hidden'));
    shortDescriptions.forEach((item) => item.classList.remove('visually-hidden'));
    descButtons.forEach((item) => item.classList.remove('visually-hidden'));

    descButtons.forEach((element) => element.addEventListener('click', renderDesc));
  }
}

export {hideOrShowDesc};