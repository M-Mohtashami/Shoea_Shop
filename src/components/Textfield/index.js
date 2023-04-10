import { svgs } from '@/svgs';
import { El } from '@/library';

export const Textfield = ({ icon, info = '', ...inputProps }) => {
  return El({
    element: 'div',
    className: `relative text-black text-left px-7 py-2 bg-gray-100 rounded-md`,
    children: [
      El({
        className: `w-full px-1 py-0 bg-gray-100 placeholder-black border-none focus:ring-0`,
        element: 'input',
        ...inputProps,
      }),
      El({
        element: 'span',
        className: 'absolute top-3 left-3',
        innerHTML: icon,
      }),
      El({
        element: 'span',
        className: 'absolute top-3 right-4 cursor-pointer',
        innerHTML: info,
      }),
    ],
  });
};
