import { El } from '@/library';
import { svgs } from '@/svgs';

export const header = (info) => {
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
            className: 'w-12 h-12 rounded-full overflow-hidden',
            children: [
              El({
                element: 'img',
                src: info.img,
              }),
            ],
          }),
          El({
            element: 'div',
            className: 'flex flex-col items-start justify-between',
            children: [
              El({
                element: 'span',
                className: 'text-gray-500 text-[16px] font-medium ',
                innerText: 'Welcome 👋',
              }),
              El({
                element: 'span',
                className: 'text-[#152536] text-[16px] font-bold ',
                innerText: info.name,
              }),
            ],
          }),
        ],
      }),
      // section notification and wish list
      El({
        element: 'div',
        className: 'flex items-center justify-center gap-4',
        children: [
          El({
            element: 'span',
            innerHTML: svgs.Notif,
          }),
          El({
            element: 'span',
            innerHTML: svgs.Like,
          }),
        ],
      }),
    ],
  });
};
