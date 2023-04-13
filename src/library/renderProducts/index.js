import { Routes } from '@/Routes';
import { El } from '@/library';

export const renderProducts = (container, products) => {
  products.map((product) => {
    const card = El({
      element: 'div',
      className:
        'max-w-sm flex flex-col items-start justify-center gap-2 col-span-6',
      //set event listener click for single product
      eventListener: [
        {
          event: 'click',
          callback: () => {
            // change route to product single page
            Routes().navigate(`/products/${product.id}`);
          },
        },
      ],
      children: [
        El({
          element: 'div',
          className:
            'w-full h-2/3 flex items-center justify-center bg-gray-200 rounded-2xl overflow-hidden aspect-square',
          children: [
            El({
              element: 'img',
              className: 'w-full h-full',
              src: product.imageURL,
            }),
          ],
        }),
        El({
          element: 'span',
          className:
            'w-full text-shoea text-[20px] font-bold whitespace-nowrap truncate',
          innerText: product.name,
        }),
        El({
          element: 'span',
          className: 'text-shoea text-[16px] font-semibold w-full',
          innerText: `$ ${product.price}`,
        }),
      ],
    });

    container.appendChild(card);
  });
};
