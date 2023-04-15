import { Routes } from '@/Routes';
import { Button } from '@/components';
import { El } from '@/library';
import { svgs } from '@/svgs';

export let finallShipping = {};
// let selectedAddress = finallAddress;

const shipping = [
  {
    name: 'Economy',
    method: 'Estimated Arrival, Dec 20-23',
    price: 10,
  },
  {
    name: 'Regular',
    method: 'Estimated Arrival, Dec 20-22',
    price: 15,
  },
  {
    name: 'Cargo',
    method: 'Estimated Arrival, Dec 19-20',
    price: 20,
  },
  {
    name: 'Express',
    method: 'Estimated Arrival, Dec 18-19',
    price: 30,
  },
];

export const Shipping = () => {
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
                  finallShipping = {};
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
                    innerText: 'Choose Shipping',
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
          ...shipping.map((ship) => {
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
                    El({
                      element: 'span',
                      className:
                        'p-2 rounded-full bg-black [&_path]:fill-white flex items-center justify-center',
                      innerHTML: svgs.Shipping,
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
                              innerText: ship.name,
                            }),
                            El({
                              element: 'span',
                              className: 'text-shoea text-lg font-bold',
                              innerText: '$ ' + ship.price,
                            }),
                            El({
                              element: 'input',
                              className:
                                'p-2.5 text-black bg-gray-100 focus:bg-black focus:ring-black focus:ring-offset-white  focus:text-black',
                              name: 'shipping',
                              type: 'radio',
                              onchange: (e) => {
                                e.target.checked === true
                                  ? (finallShipping = ship)
                                  : null;
                                console.log(finallShipping);
                              },
                            }),
                          ],
                        }),
                        //details of selected Address
                        El({
                          element: 'div',
                          className:
                            'w-full flex items-center justify-start gap-2 ',
                          children: [
                            El({
                              element: 'p',
                              className: ``,
                              innerText: ship.method,
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
                  Routes().navigate('/checkout');
                },
              },
            ],
          }),
        ],
      }),
    ],
  });
};
