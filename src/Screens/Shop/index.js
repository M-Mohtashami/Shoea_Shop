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
  const io = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) {
        return;
      }
      getData(`/products?_page=${page++}`).then((response) => {
        renderProducts(section, response.data);
      });
    });
  });
  io.observe(document.getElementById('watch_end_of_document'));
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
      El({
        element: 'p',
        id: 'watch_end_of_document',
      }),
      navbar('shop'),
    ],
  });
};
