import { Routes } from '@/Routes';
import { filterSection } from '@/layout';
import { El } from '@/library';
import { svgs } from '@/svgs';
import { showProducts } from '..';

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

export const mostPopular = () => {
  setTimeout(showProducts, 0);
  return El({
    element: 'div',
    className:
      'relative px-4 overflow-y-scroll pb-16 h-full flex flex-col items-center justify-start',
    children: [
      El({
        element: 'div',
        className: 'fixed top-0 w-full bg-white',
        children: [header('Most Popular'), filterSection()],
      }),
      El({
        element: 'div',
        className:
          'w-full px-6 py-4 mt-40 grid grid-cols-12 gap-4 product-section',
      }),
      //create Skleton from loading new data
      El({
        element: 'div',
        id: 'watch_end_of_document',
        className: 'w-full px-6 grid grid-cols-12 gap-4 ',
        children:
          // a for loop for creating skleton cards
          [1, 2, 3, 4].map(() => {
            return El({
              element: 'div',
              className:
                'max-w-sm animate-pulse flex flex-col items-start justify-center gap-2 col-span-6',
              children: [
                El({
                  element: 'div',
                  className:
                    'w-full h-2/3 bg-gray-200 rounded-2xl aspect-square',
                }),
                El({
                  element: 'div',
                  className: 'w-full h-5 rounded-full bg-gray-200',
                }),
                El({
                  element: 'div',
                  className: 'w-1/3 h-4 rounded-full bg-gray-200',
                }),
              ],
            });
          }),
      }),
    ],
  });
};
