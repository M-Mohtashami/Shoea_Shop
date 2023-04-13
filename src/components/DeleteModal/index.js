import { cart, colorStyle, updateCart } from '@/layout';
import { El } from '@/library';
import { svgs } from '@/svgs';
import { Button } from '@/components';
import { Routes } from '@/Routes';
import { cartRender, updateCartData } from '@/Screens';

export const deleteModal = (item) => {
  const mainElem = document.getElementById('app');
  const modal = El({
    element: 'div',
    id: 'delete-modal-section',
    className: 'fixed top-0 w-full h-full bg-shoea bg-opacity-50',
    onclick: (e) => {
      if (e.target.closest('#delete-modal')) return;
      document.getElementById('delete-modal-section').remove();
    },
    children: [
      // delete modall dialog section
      El({
        element: 'div',
        id: 'delete-modal',
        className:
          'fixed bottom-0 w-full flex flex-col items-start justify-end bg-white shadow-shoea shadow-2xl border-2 rounded-t-3xl overflow-hidden ',
        children: [
          El({
            element: 'div',
            className:
              'w-full flex item-center justify-center border-b shadow-md p-6',
            children: [
              El({
                element: 'span',
                className: 'text-shoea text-2xl font-semibold',
                innerText: 'Remove From Cart?',
              }),
            ],
          }),
          // item details of modal
          El({
            element: 'div',
            className: 'w-full flex item-center justify-center py-6 px-2',
            children: [
              El({
                element: 'div',
                className:
                  'max-h-sm w-full flex items-center gap-2 p-4 shadow-lg rounded-2xl',
                children: [
                  El({
                    element: 'img',
                    className: 'rounded-lg w-32 aspect-square',
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
                              'w-[80%] text-shoea text-xl font-bold whitespace-nowrap truncate',
                            innerText: item.name,
                          }),
                        ],
                      }),
                      //details of selected product
                      El({
                        element: 'div',
                        className:
                          'w-full flex items-center justify-start gap-2 ',
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
                        className:
                          'w-full flex items-center justify-start gap-6',
                        children: [
                          El({
                            element: 'span',
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
                              }),
                              El({
                                element: 'span',
                                className: 'font-bold',
                                innerHTML: item.quantity,
                              }),
                              El({
                                element: 'span',
                                className: '[&_svg]:w-5',
                                innerHTML: svgs.Plus,
                              }),
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
            ],
          }),
          // footer of modal dialog
          El({
            element: 'div',
            className:
              'w-full flex item-center justify-between border-t shadow-md p-6',
            children: [
              Button({
                child: 'Cancel',
                variant: 'cancel',
                classes: 'font-bold',
                eventListener: [
                  {
                    event: 'click',
                    callback: (e) => {
                      // remove delete modal
                      document.getElementById('delete-modal-section').remove();
                    },
                  },
                ],
              }),
              Button({
                child: 'Yes, Remove',
                variant: 'cart',
                classes: 'font-bold',
                eventListener: [
                  {
                    event: 'click',
                    callback: (e) => {
                      // delete selected item from
                      updateCartData(cart.filter((i) => i.id !== item.id));
                      updateCart(cart.filter((i) => i.id !== item.id));
                      // re render cart section
                      //   cartRender();
                      // remove delete modal
                      document.getElementById('delete-modal-section').remove();
                    },
                  },
                ],
              }),
            ],
          }),
        ],
      }),
    ],
  });
  mainElem.appendChild(modal);
};
