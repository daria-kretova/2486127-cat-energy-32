/* в этот файл добавляет скрипты*/
const navMain = document.querySelector('.main-nav');
const navToggle = document.querySelector('.main-header__nav-toggle');

navToggle.addEventListener('click', () => {
  if (navMain.classList.contains('main-nav--closed')) {
    navMain.classList.remove('main-nav--closed');
    navMain.classList.add('main-nav--opened');
    navToggle.classList.remove('main-header__nav-toggle--closed');
    navToggle.classList.add('main-header__nav-toggle--opened');
  } else {
    navMain.classList.add('main-nav--closed');
    navMain.classList.remove('main-nav--opened');
    navToggle.classList.remove('main-header__nav-toggle--opened');
    navToggle.classList.add('main-header__nav-toggle--closed');
  }
});


// const mainNav = document.querySelector('.main-navigation');
// const burger = document.querySelector('.button-burger');
// const body = document.querySelector('.body');

// body.classList.remove('nojs');
// mainNav.classList.remove('main-navigation--opened');
// mainNav.classList.add('main-navigation--closed');

// burger.addEventListener('click', ()=> {
//   if (mainNav.classList.contains('main-navigation--opened')) {
//     burger.classList.remove('button-burger--opened');
//     burger.classList.add('button-burger--closed');
//     mainNav.classList.remove('main-navigation--opened');
//     mainNav.classList.add('main-navigation--closed');
//   } else {
//     burger.classList.add('button-burger--opened');
//     burger.classList.remove('button-burger--closed');
//     mainNav.classList.add('main-navigation--opened');
//     mainNav.classList.remove('main-navigation--closed');
//   }
// });


// 2. При клике на Класс main-header__nav-toggle--opened
// он должен меняться на main-header__nav-toggle--closed
// 1. При клике на кнопку c классом .main-header__nav-toggle--opened закрыть меню
// должен пропадать класс .main-nav--opened
// и появляться класс .main-nav--closed
// 3. Это цикл


// Катино решение
// const mainNavList = document.querySelector('.main-nav__list');
// const mainHeaderToggle = document.querySelector('.main-header__navigation-toggle');

// mainNavList.classList.remove('main-nav__list--nojs');
// mainHeaderToggle.classList.remove('main-header__navigation-toggle--nojs');

// mainHeaderToggle.addEventListener('click', () => {
//   if (mainNavList.classList.contains('main-nav__list--open') && mainHeaderToggle.classList.contains('burger-button--close')) {
//     mainNavList.classList.remove('main-nav__list--open');
//     mainHeaderToggle.classList.remove('burger-button--close');
//   } else {
//     mainNavList.classList.add('main-nav__list--open');
//     mainHeaderToggle.classList.add('burger-button--close');
//   }
// });
