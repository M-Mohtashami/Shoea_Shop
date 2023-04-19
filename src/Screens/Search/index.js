import { getData } from '@/api';
import { Search } from '@/components';
import { El, renderProducts } from '@/library';
import { svgs } from '@/svgs';

let searchHistory = JSON.parse(localStorage.getItem('searchHistory')) || [];

export const searchResult = (searchVal) => {
  console.log(searchVal);
  document.getElementById('watch_end_of_document').classList.remove('hidden');
  const section = document.querySelector('.search-section');
  section.innerHTML = '';
  searchHistory = JSON.parse(localStorage.getItem('searchHistory')) || [];
  console.log(searchHistory);
  let page = 1;
  const request = () => {
    // Request for first page of data
    getData(`/products?q=${searchVal}&_page=${page++}`)
      .then((response) => {
        if (response.data.length === 0) {
          document
            .getElementById('watch_end_of_document')
            .classList.add('hidden');
        } else {
          renderProducts(section, response.data);
          if (searchVal !== '') {
            searchHistory.push(searchVal);
            searchHistory = Array.from(new Set(searchHistory));
            localStorage.setItem(
              'searchHistory',
              JSON.stringify(searchHistory)
            );
          }
        }
      })
      .catch((error) => console.log(error));
  };
  request();
  // set Interaction observer to be notified when scrollbar reached to the end of page
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) {
          return;
        }
        //request for new data
        request();
      });
    },
    {
      threshold: 1.0,
    }
  );
  io.observe(document.getElementById('watch_end_of_document'));
};

export const renderSearch = () => {
  const results = document.getElementById('search-result');
  results.innerHTML = '';
  searchHistory = JSON.parse(localStorage.getItem('searchHistory'));
  if (searchHistory.length > 0) {
    results.appendChild(
      El({
        element: 'div',
        className:
          'w-full p-4 flex items-center justify-between border-b border-gray-300',

        children: [
          El({
            element: 'span',
            className: 'font-bold text-lg text-black',
            innerText: 'Recent',
          }),
          El({
            element: 'span',
            className: 'font-semibold text-lg text-black',
            onclick: (e) => {
              localStorage.removeItem('searchHistory');
              renderSearch();
            },
            innerText: 'clear All',
          }),
        ],
      })
    );
    searchHistory.map((sh) => {
      const searchEl = El({
        element: 'div',
        className:
          'w-full p-4 flex items-center justify-between border-b border-gray-300',

        children: [
          El({
            element: 'span',
            onclick: (e) => {
              searchResult(sh);
              document.getElementById('search-input').value = sh;
              document
                .getElementById('search-result')
                .classList.remove('scale-100');
              document.getElementById('search-result').classList.add('scale-0');
              renderSearch();
            },
            innerText: sh,
          }),
          El({
            element: 'span',
            className: 'p-1 rounded-full border border-gray-300 rotate-45',
            onclick: (e) => {
              searchHistory = searchHistory.filter((history) => history !== sh);
              localStorage.setItem(
                'searchHistory',
                JSON.stringify(searchHistory)
              );
              renderSearch();
            },
            innerHTML: svgs.Plus,
          }),
        ],
      });
      results.appendChild(searchEl);
    });
  }
};

export const SearchSection = () => {
  return El({
    element: 'div',
    className:
      'h-full flex flex-col items-center justify-start overflow-y-scroll pb-16',
    children: [
      El({
        element: 'div',
        className:
          'fixed top-0 bg-white w-full py-4 z-20 flex flex-col items-center justify-center gap-2',
        children: [Search(svgs.Filter, true)],
      }),
      El({
        element: 'div',
        onclick: (e) => {
          //   if (e.target.id !== 'search-result') {
          //     document.getElementById('search-result').classList.add('scale-0');
          //     document
          //       .getElementById('search-result')
          //       .classList.remove('scale-100');
          //   }
        },
        className: 'relative w-full mt-16',
        children: [
          El({
            element: 'div',
            id: 'search-result',
            className:
              'fixed top-16 z-20 w-full shadow-lg rounded-lg bg-gray-50 scale-0 origin-top transition duration-200 ease-in-out',
          }),
          El({
            element: 'div',
            className: 'overflow-y-scroll',
            children: [
              El({
                element: 'div',
                className:
                  'w-full px-6 py-4 grid grid-cols-12 gap-4 search-section',
              }),
              //create Skleton from loading new data
              El({
                element: 'div',
                id: 'watch_end_of_document',
                className: 'w-full px-6 grid grid-cols-12 gap-4 ',
                children:
                  // a for loop for creating skleton cards
                  [1, 2, 3, 4].map(() => {
                    return El({
                      element: 'div',
                      className:
                        'max-w-sm animate-pulse flex flex-col items-start justify-center gap-2 col-span-6',
                      children: [
                        El({
                          element: 'div',
                          className:
                            'w-full h-2/3 bg-gray-200 rounded-2xl aspect-square',
                        }),
                        El({
                          element: 'div',
                          className: 'w-full h-5 rounded-full bg-gray-200',
                        }),
                        El({
                          element: 'div',
                          className: 'w-1/3 h-4 rounded-full bg-gray-200',
                        }),
                      ],
                    });
                  }),
              }),
            ],
          }),
        ],
      }),
    ],
  });
};
