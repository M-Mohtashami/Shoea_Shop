import { El } from '@/library';

const variants = {
  contained:
    'text-white bg-black font-medium rounded-full text-md w-[21rem] px-8 py-2.5 text-center dark:bg-blue-600 shadow-lg',
  cart: 'text-white bg-black font-medium rounded-full text-md px-8 py-4 text-center dark:bg-blue-600 shadow-lg',
  cancel:
    'text-shoea bg-gray-200 font-medium rounded-full text-md px-8 py-4 text-center dark:bg-blue-600 shadow-sm',
};

export const Button = ({
  element = 'button',
  child,
  icon = '',
  classes,
  variant = 'contained',
  ...rest
}) => {
  return El({
    element,
    className: `${variants[variant]} ${classes}`,
    children: [
      El({
        element: 'span',
        className: '[&_path]:fill-white',
        innerHTML: icon,
      }),
      child,
    ],
    ...rest,
  });
};
