import { El } from '@/library';
import { Textfield } from '@/components';
import { svgs } from '@/svgs';
import { Routes } from '@/Routes';
import { renderSearch, searchResult } from '@/Screens/Search';
import { debounce } from 'lodash';

export const Search = (info = '', onSearch = false) => {
  return El({
    element: 'form',
    eventListener: [
      {
        event: 'submit',
        callback: (e) => {
          e.preventDefault();
          searchResult(e.target.search.value);
        },
      },
    ],
    className:
      'w-full px-4 py-1 [&_path]:fill-gray-600 [&_input]:placeholder-gray-400',
    children: [
      Textfield({
        icon: svgs.SearchIcon,
        info,
        placeholder: 'Search',
        name: 'search',
        id: 'search-input',
        eventListener: [
          {
            event: 'focus',
            callback: (e) => {
              if (!onSearch) {
                Routes().navigate('/search');
              } else {
                document
                  .getElementById('search-result')
                  .classList.remove('scale-0');
                document
                  .getElementById('search-result')
                  .classList.add('scale-100');
                renderSearch();
              }
            },
          },
          {
            event: 'keyup',
            callback: debounce((e) => {
              console.log(e.target.value);
              searchResult(e.target.value);
            }, 1000),
          },
          {
            event: 'click',
            callback: (e) => {
              // document
              //   .getElementById('search-result')
              //   .classList.toggle('scale-0');
              // document
              //   .getElementById('search-result')
              //   .classList.toggle('scale-100');
            },
          },
        ],
      }),
    ],
  });
};
