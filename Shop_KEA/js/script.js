'use strict';

const cart = document.querySelector('.cart'),
      svg = document.querySelectorAll('.cart__link-svg'),
      shop = document.querySelector('.shopping__cart-list');

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

svg.forEach(item => {
    item.addEventListener('click', (e) => {
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