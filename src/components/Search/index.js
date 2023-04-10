import { El } from '@/library';
import { Textfield } from '@/components';
import { svgs } from '@/svgs';

export const Search = () => {
  return El({
    element: 'div',
    className:
      'w-full px-4 py-1 [&_path]:fill-gray-600 [&_input]:placeholder-gray-400',
    children: [
      Textfield({
        icon: svgs.SearchIcon,
        placeholder: 'Search',
      }),
    ],
  });
};
