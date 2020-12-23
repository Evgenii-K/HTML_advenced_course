'use strict';

const cart = document.querySelector('.cart'),
      svg = document.querySelectorAll('.cart__link-svg'),
      shop = document.querySelector('.shopping__cart-list'),
      svgOne = document.querySelector('.cart__link-svg');

console.log(cart);
console.log(svg);

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
    item.addEventListener('clice', (e) => {
        console.log(e.currentTarget);
        e.currentTarget.remove();
    });
});


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