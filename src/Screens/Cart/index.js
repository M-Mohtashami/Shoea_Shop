import { El } from '@/library';
import { cartHeader, navbar, cart } from '@/layout';
import { svgs } from '@/svgs';
import { Button } from '@/components';

const cartRender = () => {
  const container = document.getElementById('cart-section');
  cart.map((item) => {
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
          className: 'w-full flex flex-col gap-2 items-start justify-start ',
          children: [
            // title
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
                }),
              ],
            }),
          ],
        }),
      ],
    });
    container.appendChild(elem);
  });
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
        className: 'w-full px-6 flex flex-col items-center justify-start gap-6',
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
                id: 'total-price',
                className: 'font-bold text-2xl',
                innerText: `$ 240.00`,
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
                  //   Cart.push(productInfo);
                  console.log(Cart);
                  //   Routes().navigate('/shop');
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
