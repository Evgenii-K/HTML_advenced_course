'use strict';

const svg = document.querySelectorAll('.cart__link-svg'),
      linkClose = document.querySelector('.hamburger-menu__link-close'),
      menuLink = document.querySelector('.header__label'),
      svgColor = document.querySelector('.header__menu--checked-svg'),
      checkbox = document.querySelector('.header__checkbox'),
      promo = document.querySelector('.promo'),
      divBackground = document.createElement('div'),
      divEmpty = document.createElement('div');

divBackground.classList.add('promo__hidden');
divEmpty.classList.add('cart', 'cart__empty');
divEmpty.innerHTML = '<h2 class="cart__title">Cart is empty</h2>';

//Изменяем цвет иконки бургер меню в открытом положении
// и убираеме затемнение promo

svgColor.setAttribute('fill', '#E8E8E8');

linkClose.addEventListener('click', () => {
    checkbox.checked = false;
    svgColor.setAttribute('fill', '#E8E8E8');
    divBackground.remove();
});

//Затемняем promo

menuLink.addEventListener('click', () => {
    if (checkbox.checked == false) {
        promo.append(divBackground);
    } else {
        divBackground.remove();
    }
});

//Удаляем нарточку из корзины

svg.forEach(item => {
    item.addEventListener('click', (e) => {
        if (e.path[0].nodeName == 'svg') {
            if (document.querySelectorAll('.cart').length == 1) {
                e.path[4].replaceWith(divEmpty);
            } else {
                e.path[4].remove();
            }
        } else if (e.path[0].nodeName == 'path') {
            if (document.querySelectorAll('.cart').length == 1) {
                e.path[5].replaceWith(divEmpty);
            } else {
                e.path[5].remove();
            }
        }
    });
});