'use strict';

const cart = document.querySelector('.cart'),
      svg = document.querySelectorAll('.cart__link-svg'),
      shop = document.querySelector('.shopping__cart-list'),
      svgOne = document.querySelector('.cart__link-svg'),
      linkClose = document.querySelector('.hamburger-menu__link-close'),
      menuLink = document.querySelector('.header__menu--checked'),
      svgColor = document.querySelector('.header__menu--checked-svg'),
      checkbox = document.querySelector('.header__checkbox');

console.log(cart);
console.log(svg);

svgColor.setAttribute('fill', '#E8E8E8');

linkClose.addEventListener('click', () => {
    checkbox.checked = false;
    svgColor.setAttribute('fill', '#E8E8E8');
});

// menuLink.addEventListener('click', () => {
//     if (checkbox.checked == false) {
//         svgColor.setAttribute('fill', '#F16D7F');
//     } else {
//         svgColor.setAttribute('fill', '#E8E8E8');
//     }
// });




// let deleteShop = shop.addEventListener('mouseover', (e) => {
//     cart.item(e.target);
// });

// svg.forEach(item => {
//     item.addEventListener('click', cart.forEach(item => {
//         item.remove();
//     }));
// });



console.dir(svgOne);

svg.forEach(item => {
    item.addEventListener('click', (e) => {
        console.log(e.currentTarget);
        e.currentTarget.remove();
    });
});

// svg.forEach(item => {
//     item.addEventListener('mouseover', (e) => {
//         // console.log(e.currentTarget.getAttribute('width'));
//         e.currentTarget.style.width = '35px';
//         e.currentTarget.style.height = '35px';
//     });
// });



// svg.forEach(item => {
//     item.addEventListener('mouseout', (e) => {
//         // console.log(e.currentTarget.getAttribute('width'));
//         e.currentTarget.style.width = '18px';
//         e.currentTarget.style.height = '18px';
//     });
// });

// console.log(deleteShop);




// cart.forEach((item, i) => {
//     item.addEventListener('mouseover', () => {
//         return i;
//     });
// });


// let i = cartNumb(cart);

// cart.forEach((item, i) => {
//     item.addEventListener('mouseover', () => {
//         return i;
//     });
// });