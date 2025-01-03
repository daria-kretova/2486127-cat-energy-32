/* в этот файл добавляет скрипты*/
const navMain = document.querySelector('.main-nav');
const navToggle = document.querySelector('.main-header__nav-toggle');

navMain.classList.remove('main-nav--nojs');

navToggle.addEventListener('click', () => {
  if (navMain.classList.contains('main-nav--closed')) {
    navMain.classList.remove('main-nav--closed');
    navMain.classList.add('main-nav--opened');
  } else {
    navMain.classList.add('main-nav--closed');
    navMain.classList.remove('main-nav--opened');
  }
});

// 2. При клике на Класс main-header__nav-toggle--opened
// он должен меняться на main-header__nav-toggle--closed
// 1. При клике на кнопку c классом .main-header__nav-toggle--opened закрыть меню
// должен пропадать класс .main-nav--opened
// и появляться класс .main-nav--closed
// 3. Это цикл
