import { El } from '@/library';
import { svgs } from '@/svgs';

const filters = [
  {
    name: 'All',
  },
  {
    name: 'Nike',
  },
  {
    name: 'Adidas',
  },
  {
    name: 'Puma',
  },
  {
    name: 'Asics',
  },
  {
    name: 'Reebok',
  },
  {
    name: 'New Balance',
  },
  {
    name: 'Converse',
  },
];

export const renderFilter = (TI = 0) => {
  return filters.map((filter, index) => {
    if (index === TI) {
      return El({
        element: 'div',
        dataset: {
          id: index,
        },
        className:
          'px-6 py-2 border-2 border-shoea bg-shoea text-white rounded-full',
        children: [
          El({
            element: 'span',
            className:
              'text-center text-[16px] font-semibold whitespace-nowrap',
            innerText: filter.name,
          }),
        ],
      });
    }
    return El({
      element: 'div',
      dataset: {
        id: index,
      },
      className: 'px-6 py-2 border-2 border-shoea rounded-full',
      children: [
        El({
          element: 'span',
          className: 'text-center text-[16px] font-semibold whitespace-nowrap',
          innerText: filter.name,
        }),
      ],
    });
  });
};

export const filterSection = () => {
  return El({
    element: 'div',
    id: 'filter-section',
    className:
      'w-full px-4 py-8 flex items-center justify-start gap-4 overflow-x-scroll',
    children: [...renderFilter()],
    eventListener: [
      {
        event: 'click',
        callback: (e) => {
          if (!e.target.closest('[data-id]')) return;
          const target = e.target.closest('[data-id]').dataset.id;
          e.currentTarget.innerHTML = '';
          console.log(target);
          e.currentTarget.append(...renderFilter(+target));
        },
      },
    ],
  });
};
