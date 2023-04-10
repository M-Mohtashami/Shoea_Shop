import { El } from '@/library';
import { navbar } from '@/layout';
import { header, brandFilter } from '@/layout';
import { Search } from '@/components';
const info = {
  name: 'Mohammad',
  img: './images/profile.png',
};
export const Shop = () => {
  return El({
    element: 'div',
    className: 'h-full flex flex-col items-center justify-start',
    children: [header(info), Search(), brandFilter(), navbar('shop')],
  });
};
