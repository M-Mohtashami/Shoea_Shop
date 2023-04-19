import { Routes } from '@/Routes';
import { filterSection } from '@/layout';
import { El, renderProducts } from '@/library';
import { svgs } from '@/svgs';
import { showProducts } from '..';
import { getData } from '@/api';
import Cookies from 'js-cookie';

const header = (title) => {
  return El({
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
              Routes().navigate('/shop');
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
                innerText: title,
              }),
            ],
          }),
        ],
      }),
    ],
  });
};

const renderWishList = () => {
  const container = document.querySelector('.product-section');
  getData(`/users?_email=${Cookies.get('shoea')}`).then((response) => {
    const user = response.data[0];
    renderProducts(container, user.wishlist);
  });
};

export const wishlist = () => {
  setTimeout(renderWishList, 0);
  return El({
    element: 'div',
    className:
      'relative px-4 overflow-y-scroll pb-16 h-full flex flex-col items-center justify-start',
    children: [
      El({
        element: 'div',
        className: 'fixed top-0 w-full bg-white',
        children: [header('My WishList')],
      }),
      El({
        element: 'div',
        className:
          'w-full px-6 py-4 mt-16 grid grid-cols-12 gap-4 product-section',
      }),
    ],
  });
};
