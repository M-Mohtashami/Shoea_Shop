import { El } from '@/library';
import { svgs } from '@/svgs';
export const spiner = () => {
  return El({
    element: 'div',
    className: 'w-12 h-12 flex items-center justify-center',
    innerHTML: svgs.Spiner,
  });
};