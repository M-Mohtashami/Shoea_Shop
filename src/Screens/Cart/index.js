import { El } from '@/library';
import { cartHeader, navbar, cart, updateCart, colorStyle } from '@/layout';
import { svgs } from '@/svgs';
import { Button, deleteModal } from '@/components';
import { getData, update } from '@/api';
import Cookies from 'js-cookie';
import { data } from 'autoprefixer';
import { Routes } from '@/Routes';

const checkoutPrice = (cart) => {
  const checkout = document.getElementById('checkout-price');
  let price = 0;
  cart.map((item) => {
    price += item.totalPrice;
  });
  checkout.innerText = `$ ${price}`;
};

export const cartRender = () => {
  getData(`/users?_email=${Cookies.get('shoea')}`).then((response) => {
    const container = document.getElementById('cart-section');
    container.innerHTML = '';
    // update cart data in local variable based on server data
    updateCart(response.data[0].cart);
    //update total price
    checkoutPrice(cart);
    // create a card of product in cart
    cart.forEach((item) => {
      getData(`/products/${item.id}`).then((response) => {
        const product = response.data;
        const elem = El({
          element: 'div',
          className:
            'max-h-sm w-full flex items-center gap-2 p-4 shadow-lg rounded-2xl',
          children: [
            El({
              element: 'img',
              className: 'rounded-lg w-32 aspect-square	',
              src: item.img,
            }),
            El({
              element: 'div',
              className:
                'w-full flex flex-col gap-2 items-start justify-between ',
              children: [
                // title of selected product
                El({
                  element: 'div',
                  className: 'w-full flex items-center justify-between',
                  children: [
                    El({
                      element: 'span',
                      className:
                        'w-32 text-shoea text-xl font-bold whitespace-nowrap truncate',
                      innerText: item.name,
                    }),
                    El({
                      element: 'span',
                      className: 'flex justify-end',
                      innerHTML: svgs.Trash,
                      onclick: (e) => {
                        deleteModal(item);
                      },
                    }),
                  ],
                }),
                //details of selected product
                El({
                  element: 'div',
                  className: 'w-full flex items-center justify-start gap-2 ',
                  children: [
                    El({
                      element: 'div',
                      className: `w-5 h-5 ${
                        colorStyle[item.color].bg
                      } flex items-center justify-center rounded-full cursor-pointer`,
                    }),
                    El({
                      element: 'span',
                      className: `text-shoea text-md font-semibold`,
                      innerText: item.color,
                    }),
                    El({
                      element: 'div',
                      className: `w-1 h-5 border-r-2 border-gray-500`,
                    }),
                    El({
                      element: 'span',
                      className: `text-shoea text-md font-semibold`,
                      innerText: 'size',
                    }),
                    El({
                      element: 'span',
                      className: `text-shoea text-md font-semibold`,
                      innerText: item.size,
                    }),
                  ],
                }),
                //product total price and quantity handel button
                El({
                  element: 'div',
                  className: 'w-full flex items-center justify-start gap-6',
                  children: [
                    El({
                      element: 'span',
                      id: `item-price-${item.id}`,
                      className: 'text-shoea text-lg font-bold',
                      innerText: `$ ${item.totalPrice}`,
                    }),
                    El({
                      element: 'div',
                      className:
                        'w-24 h-10 bg-gray-200 rounded-full flex items-center justify-between p-4',
                      children: [
                        El({
                          element: 'span',
                          className: '[&_svg]:w-5',
                          innerHTML: svgs.Mines,
                          onclick: (e) => {
                            item.quantity > 1
                              ? item.quantity--
                              : deleteModal(item);
                            item.totalPrice = product.price * item.quantity;
                            document.getElementById(
                              `item-quantity-${item.id}`
                            ).innerText = item.quantity;
                            document.getElementById(
                              `item-price-${item.id}`
                            ).innerText = `$ ${item.totalPrice}`;
                            updateCartData(cart);
                          },
                        }),
                        El({
                          element: 'span',
                          id: `item-quantity-${item.id}`,
                          className: 'font-bold',
                          innerHTML: item.quantity,
                        }),
                        El({
                          element: 'span',
                          className: '[&_svg]:w-5',
                          innerHTML: svgs.Plus,
                          onclick: (e) => {
                            item.quantity < +product['items_left']
                              ? item.quantity++
                              : item.quantity;
                            item.totalPrice = product.price * item.quantity;
                            document.getElementById(
                              `item-quantity-${item.id}`
                            ).innerText = item.quantity;

                            document.getElementById(
                              `item-price-${item.id}`
                            ).innerText = `$ ${item.totalPrice}`;
                            updateCartData(cart);
                          },
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
          ],
        });
        container.appendChild(elem);
      });
    });
  });
  // .catch((error) => {
  //   // use cart data based on local data whene connection lost
  //   const container = document.getElementById('cart-section');
  //   cart.forEach((item) => {
  //     getData(`/products/${item.id}`).then((response) => {
  //       const product = response.data;
  //       const elem = El({
  //         element: 'div',
  //         className:
  //           'max-h-sm w-full flex items-center gap-2 p-4 shadow-lg rounded-2xl',
  //         children: [
  //           El({
  //             element: 'img',
  //             className: 'rounded-lg w-32 aspect-square	',
  //             src: item.img,
  //           }),
  //           El({
  //             element: 'div',
  //             className:
  //               'w-full flex flex-col gap-2 items-start justify-between ',
  //             children: [
  //               // title of selected product
  //               El({
  //                 element: 'div',
  //                 className: 'w-full flex items-center justify-between',
  //                 children: [
  //                   El({
  //                     element: 'span',
  //                     className:
  //                       'w-32 text-shoea text-xl font-bold whitespace-nowrap truncate',
  //                     innerText: item.name,
  //                   }),
  //                   El({
  //                     element: 'span',
  //                     className: 'flex justify-end',
  //                     innerHTML: svgs.Trash,
  //                   }),
  //                 ],
  //               }),
  //               //details of selected product
  //               El({
  //                 element: 'div',
  //                 className: 'w-full flex items-center justify-start gap-2 ',
  //                 children: [
  //                   El({
  //                     element: 'div',
  //                     className: `w-5 h-5 ${
  //                       colorStyle[item.color].bg
  //                     } flex items-center justify-center rounded-full cursor-pointer`,
  //                   }),
  //                   El({
  //                     element: 'span',
  //                     className: `text-shoea text-md font-semibold`,
  //                     innerText: item.color,
  //                   }),
  //                   El({
  //                     element: 'div',
  //                     className: `w-1 h-5 border-r-2 border-gray-500`,
  //                   }),
  //                   El({
  //                     element: 'span',
  //                     className: `text-shoea text-md font-semibold`,
  //                     innerText: 'size',
  //                   }),
  //                   El({
  //                     element: 'span',
  //                     className: `text-shoea text-md font-semibold`,
  //                     innerText: item.size,
  //                   }),
  //                 ],
  //               }),
  //               //product total price and quantity handel button
  //               El({
  //                 element: 'div',
  //                 className: 'w-full flex items-center justify-start gap-6',
  //                 children: [
  //                   El({
  //                     element: 'span',
  //                     id: `item-price-${item.id}`,
  //                     className: 'text-shoea text-lg font-bold',
  //                     innerText: `$ ${item.totalPrice}`,
  //                   }),
  //                   El({
  //                     element: 'div',
  //                     className:
  //                       'w-24 h-10 bg-gray-200 rounded-full flex items-center justify-between p-4',
  //                     children: [
  //                       El({
  //                         element: 'span',
  //                         className: '[&_svg]:w-5',
  //                         innerHTML: svgs.Mines,
  //                         onclick: (e) => {
  //                           item.quantity > 1
  //                             ? item.quantity--
  //                             : item.quantity;
  //                           item.totalPrice = product.price * item.quantity;
  //                           document.getElementById(
  //                             `item-quantity-${item.id}`
  //                           ).innerText = item.quantity;
  //                           document.getElementById(
  //                             `item-price-${item.id}`
  //                           ).innerText = `$ ${item.totalPrice}`;
  //                           updateCartData(cart);
  //                         },
  //                       }),
  //                       El({
  //                         element: 'span',
  //                         id: `item-quantity-${item.id}`,
  //                         className: 'font-bold',
  //                         innerHTML: item.quantity,
  //                       }),
  //                       El({
  //                         element: 'span',
  //                         className: '[&_svg]:w-5',
  //                         innerHTML: svgs.Plus,
  //                         onclick: (e) => {
  //                           item.quantity < +product['items_left']
  //                             ? item.quantity++
  //                             : item.quantity;
  //                           item.totalPrice = product.price * item.quantity;
  //                           document.getElementById(
  //                             `item-quantity-${item.id}`
  //                           ).innerText = item.quantity;

  //                           document.getElementById(
  //                             `item-price-${item.id}`
  //                           ).innerText = `$ ${item.totalPrice}`;
  //                           updateCartData(cart);
  //                         },
  //                       }),
  //                     ],
  //                   }),
  //                 ],
  //               }),
  //             ],
  //           }),
  //         ],
  //       });
  //       container.appendChild(elem);
  //     });
  //   });
  // });
};

export const updateCartData = (cart) => {
  getData(`/users?_email=${Cookies.get('shoea')}`).then((response) => {
    update
      .patch(`/users/${response.data[0].id}`, {
        cart,
      })
      .then(() => {
        //rerender the cart
        cartRender();
      });
  });
  //update total price
  checkoutPrice(cart);
};

export const Cart = () => {
  setTimeout(cartRender, 0);
  return El({
    element: 'div',
    className: 'h-full flex flex-col items-center justify-start',
    children: [
      cartHeader(),
      El({
        element: 'div',
        id: 'cart-section',
        className:
          'w-full px-6 pb-40 flex flex-col items-center justify-start gap-6 overflow-y-scroll',
      }),
      El({
        element: 'div',
        className:
          'fixed bottom-0 w-full p-6 h-40 flex items-start justify-between bg-white shadow-2xl border-2 rounded-t-3xl',
        children: [
          El({
            element: 'div',
            className: 'flex flex-col items-start justify-between gap-1',
            children: [
              El({
                element: 'span',
                className: 'text-gray-400 font-semibold',
                innerText: 'Total price',
              }),
              El({
                element: 'span',
                id: 'checkout-price',
                className: 'font-bold text-2xl',
                innerText: `$ 00.00`,
              }),
            ],
          }),
          Button({
            child: 'Check out',
            icon: svgs.Next,
            variant: 'cart',
            classes:
              'font-bold flex flex-row-reverse items-center justify-center gap-2',
            eventListener: [
              {
                event: 'click',
                callback: (e) => {
                  console.log(Cart);
                  Routes().navigate('/checkout');
                },
              },
            ],
          }),
        ],
      }),
      navbar('cart'),
    ],
  });
};
