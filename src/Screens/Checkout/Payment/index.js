import { Routes } from '@/Routes';
import { Button } from '@/components';
import { El } from '@/library';
import { svgs } from '@/svgs';
import { cart } from '@/layout';
import Cookies from 'js-cookie';
import { getData, update } from '@/api';
// let selectedAddress = finallAddress;
let order = {};
const payments = [
  {
    name: 'My Wallet',
    icon: svgs.WalletFill,
    amount: 10,
  },
  {
    name: 'PayPal',
    icon: '/images/paypal.png',
    amount: 0,
  },
  {
    name: 'Google Pay',
    icon: '/images/search.png',
    amount: 0,
  },
  {
    name: 'Apple Pay',
    icon: '/images/apple-logo.png',
    amount: 0,
  },
  {
    name: 'Master Card',
    icon: '/images/mc.png',
    amount: 0,
  },
];

export const Payment = () => {
  return El({
    element: 'div',
    className:
      'relative overflow-y-scroll pb-16 h-full flex flex-col items-center justify-start',
    children: [
      // header section
      El({
        element: 'div',
        className: 'w-full p-4 flex items-center justify-between',
        children: [
          El({
            element: 'div',
            className: 'flex items-center justify-center gap-4',
            children: [
              El({
                element: 'div',
                className: '',
                onclick: (e) => {
                  Routes().navigate('/checkout');
                },
                children: [
                  El({
                    element: 'span',
                    className: 'w-10 h-10',
                    innerHTML: svgs.Back,
                  }),
                ],
              }),
              El({
                element: 'div',
                className: 'flex flex-col items-start justify-between',
                children: [
                  El({
                    element: 'span',
                    className: 'text-[#152536] text-xl font-bold ',
                    innerText: 'Payment Methods',
                  }),
                ],
              }),
            ],
          }),
        ],
      }),
      // Shipping address
      El({
        element: 'div',
        className: 'w-[90%] py-4 flex flex-col items-start justify-start gap-6',
        children: [
          //Shipping Address section
          ...payments.map((pay, index) => {
            return El({
              element: 'label',
              for: 'shipping',
              className: 'w-full',
              children: [
                El({
                  element: 'div',
                  className:
                    'max-h-sm w-full flex items-center gap-4 p-4 shadow-lg rounded-2xl',
                  children: [
                    //location icon
                    index === 0
                      ? El({
                          element: 'span',
                          className:
                            'w-12 h-12 flex items-center justify-center',
                          innerHTML: pay.icon,
                        })
                      : El({
                          element: 'img',
                          className:
                            'w-10 h-8 flex items-center justify-center',
                          src: pay.icon,
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
                              innerText: pay.name,
                            }),
                            El({
                              element: 'span',
                              className: 'text-shoea text-lg font-bold',
                              innerText: index === 0 ? '$ ' + pay.amount : '',
                            }),
                            El({
                              element: 'input',
                              className:
                                'p-2.5 text-black bg-gray-100 focus:bg-black focus:ring-black focus:ring-offset-white  focus:text-black',
                              name: 'shipping',
                              type: 'radio',
                              checked: index === 0 ? true : false,
                            }),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            });
          }),
        ],
      }),
      // footer
      El({
        element: 'div',
        className:
          'fixed bottom-0 w-full p-6 h-28 flex items-start justify-between bg-white shadow-2xl border-2 rounded-t-3xl',
        children: [
          Button({
            child: 'Apply',
            variant: 'cart',
            classes:
              'font-bold w-full flex flex-row-reverse items-center justify-center gap-2',
            eventListener: [
              {
                event: 'click',
                callback: () => {
                  getData(`/users?_email=${Cookies.get('shoea')}`).then(
                    (response) => {
                      order = {
                        id: Date.now(),
                        status: 'active',
                        cart,
                      };
                      response.data[0].orders.push(order);
                      console.log(response.data[0]);
                      update.put(
                        `/users/${response.data[0].id}`,
                        response.data[0]
                      );
                    }
                  );
                },
              },
            ],
          }),
        ],
      }),
    ],
  });
};
