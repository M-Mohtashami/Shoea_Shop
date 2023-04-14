import { El } from '@/library';
import { svgs } from '@/svgs';

export const cartHeader = () => {
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
            children: [
              El({
                element: 'img',
                className: 'w-10 h-10',
                src: '/images/logo.svg',
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
                innerText: 'My Cart',
              }),
            ],
          }),
        ],
      }),
      // section search icon
      El({
        element: 'div',
        className: '',
        children: [
          El({
            element: 'span',
            className: '[&_path]:fill-black',
            innerHTML: svgs.SearchIcon,
          }),
        ],
      }),
    ],
  });
};
