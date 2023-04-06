import { El } from '@/library';

const variants = {
  contained:
    'text-white bg-black font-medium rounded-full text-md w-[21rem] px-8 py-2.5 text-center dark:bg-blue-600',
};

export const Button = ({
  element = 'button',
  child,
  classes,
  variant = 'contained',
  ...rest
}) => {
  return El({
    element,
    className: `${variants[variant]} ${classes}`,
    children: [child],
    ...rest,
  });
};