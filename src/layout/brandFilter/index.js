import { Routes } from '@/Routes';
import { El } from '@/library';
import { svgs } from '@/svgs';

const brands = [
  {
    name: 'Nike',
    src: './images/nike.png',
  },
  {
    name: 'Adidas',
    src: './images/adidas.png',
  },
  {
    name: 'Puma',
    src: './images/puma.png',
  },
  {
    name: 'Asics',
    src: './images/asics.png',
  },
  {
    name: 'Reebok',
    src: './images/reebok.png',
  },
  {
    name: 'New Balance',
    src: './images/new-balance.png',
  },
  {
    name: 'Converse',
    src: './images/converse.png',
  },
];

export const brandFilter = () => {
  return El({
    element: 'div',
    className: 'w-full p-4 grid grid-cols-4 gap-y-8',
    children: [
      ...brands.map((brand) => {
        return El({
          element: 'div',
          onclick: (e) => Routes().navigate(`/brand/${brand.name}`),
          className:
            'flex flex-col col-span-1 items-center justify-center gap-1',
          children: [
            El({
              element: 'div',
              className:
                'w-12 h-12 p-3 flex items-center justify-center rounded-full bg-gray-200 overflow-hidden',
              children: [
                El({
                  element: 'img',
                  src: brand.src,
                }),
              ],
            }),
            El({
              element: 'span',
              className:
                'w-16 text-center text-[14px] font-semibold whitespace-nowrap truncate',
              innerText: brand.name,
            }),
          ],
        });
      }),
      El({
        element: 'div',
        className: 'flex flex-col col-span-1 items-center justify-center gap-1',
        children: [
          El({
            element: 'div',
            className:
              'w-12 h-12 p-3 flex items-center justify-center rounded-full bg-gray-200 overflow-hidden',
            children: [
              El({
                element: 'span',
                innerHTML: svgs.More,
              }),
            ],
          }),
          El({
            element: 'span',
            className:
              'w-16 text-center text-[14px] font-semibold whitespace-nowrap truncate',
            innerText: 'More..',
          }),
        ],
      }),
    ],
  });
};
