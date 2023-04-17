import { cart, updateCart } from '@/layout';
import { El } from '@/library';
import { svgs } from '@/svgs';
import { Button } from '@/components';
import { Routes } from '@/Routes';
import { updateCartData } from '@/Screens';

export const paymentModal = () => {
  const mainElem = document.getElementById('app');
  const modal = El({
    element: 'div',
    id: 'pay-modal-section',
    className:
      'fixed top-0 w-full h-full px-4 bg-shoea bg-opacity-50 flex items-center justify-center',
    onclick: (e) => {
      if (e.target.closest('#payment-modal')) return;
      document.getElementById('pay-modal-section').remove();
    },
    children: [
      // delete modall dialog section
      El({
        element: 'div',
        id: 'payment-modal',
        className:
          'w-full flex flex-col items-center justify-between bg-white border-2 rounded-3xl overflow-hidden ',
        children: [
          El({
            element: 'div',
            className: 'w-full flex item-center justify-center',
            children: [
              El({
                element: 'img',
                className: 'm-4',
                src: './images/payment-confirm.jpg',
              }),
            ],
          }),
          // item details of modal
          El({
            element: 'h1',
            className: 'text-shoea text-2xl font-semibold',
            innerText: 'Order Successful!',
          }),
          El({
            element: 'p',
            className: 'text-gray-600 text-lg',
            innerText: 'You Have Successfully mode order',
          }),
          // footer of modal dialog
          El({
            element: 'div',
            className:
              'w-full flex flex-col-reverse flex-col item-center justify-between gap-4 p-4',
            children: [
              Button({
                child: 'Shop',
                variant: 'cancel',
                classes: 'font-bold',
                eventListener: [
                  {
                    event: 'click',
                    callback: (e) => {
                      Routes().navigate('/shop');
                      document.getElementById('delete-modal-section').remove();
                    },
                  },
                ],
              }),
              Button({
                child: 'Orders',
                variant: 'cart',
                classes: 'font-bold',
                eventListener: [
                  {
                    event: 'click',
                    callback: (e) => {
                      Routes().navigate('/orders');
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
