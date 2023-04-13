import { El, renderProducts } from '@/library';
import { navbar } from '@/layout';
import { header, brandFilter, filterSection } from '@/layout';
import { Search } from '@/components';
import { getData } from '@/api';

const info = {
  name: 'Mohammad',
  img: './images/profile.png',
};

const showProducts = () => {
  const section = document.querySelector('.product-section');
  section.innerHTML = '';
  let page = 1;
  // set Interaction observer to be notified when scrollbar reached to the end of page
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) {
          return;
        }
        //request for new data
        getData(`/products?_page=${page++}`)
          .then((response) => {
            renderProducts(section, response.data);
            console.log(response);
            if (response.data.length === 0) {
              document.getElementById('watch_end_of_document').remove();
            }
          })
          .catch((error) => console.log(error));
      });
    },
    {
      threshold: 1.0,
    }
  );
  io.observe(document.getElementById('watch_end_of_document'));
  // Request for first page of data
  getData(`/products?_page=${page++}`).then((response) => {
    renderProducts(section, response.data);
  });
};

export const Shop = () => {
  setTimeout(showProducts, 0);
  return El({
    element: 'div',
    className:
      'h-full flex flex-col items-center justify-start overflow-y-scroll pb-16',
    children: [
      header(info),
      Search(),
      brandFilter(),
      El({
        element: 'div',
        className: 'w-full px-6 py-2 flex items-center justify-between',
        children: [
          El({
            element: 'span',
            className: 'text-[20px] font-semibold ',
            innerText: 'Most Popular',
          }),
          El({
            element: 'span',
            className: 'text-4 font-semibold ',
            innerText: 'See All',
          }),
        ],
      }),
      filterSection(),
      El({
        element: 'div',
        className: 'w-full px-6 py-4 grid grid-cols-12 gap-4 product-section',
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
      navbar('shop'),
    ],
  });
};
