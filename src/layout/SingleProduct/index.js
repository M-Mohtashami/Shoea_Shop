import { Routes } from '@/Routes';
import { getData, update } from '@/api';
import { Button } from '@/components';
import { El } from '@/library';
import { svgs } from '@/svgs';
import Cookies from 'js-cookie';
import Swiper from 'swiper';
export let cart = [];
export const updateCart = (newCart) => {
  cart = newCart;
};
let productInfo;
// a function to render size section and change the style of selected size
const renderSize = (sizes, index = 0) => {
  const elem = document.getElementById('size');
  elem.innerHTML = '';
  sizes.map((size, i) => {
    if (index === i) {
      elem.append(
        El({
          element: 'div',
          className:
            'w-8 h-8 flex items-center justify-center bg-shoea border-2 border-shoea rounded-full text-white cursor-pointer ',
          innerText: size,
          onclick: (e) => {
            productInfo.size = size;
            renderSize(sizes, i);
          },
        })
      );
    } else {
      elem.append(
        El({
          element: 'div',
          className:
            'w-8 h-8 flex items-center justify-center border-2 border-shoea rounded-full text-shoea cursor-pointer ',
          innerText: size,
          onclick: (e) => {
            productInfo.size = size;
            renderSize(sizes, i);
          },
        })
      );
    }
  });
};
export const colorStyle = {
  black: {
    bg: 'bg-shoea',
    fill: '[&_path]:fill-white',
  },
  brown: {
    bg: 'bg-yellow-800',
    fill: '[&_path]:fill-white',
  },
  white: {
    bg: 'bg-gray-200',
    fill: '[&_path]:fill-shoea',
  },
  blue: {
    bg: 'bg-blue-500',
    fill: '[&_path]:fill-shoea',
  },
  red: {
    bg: 'bg-red-500',
    fill: '[&_path]:fill-shoea',
  },
};
// a function to render color section and change the style of selected color
const renderColor = (colors, index = 0) => {
  const elem = document.getElementById('color');
  elem.innerHTML = '';
  colors.map((color, i) => {
    if (index === i) {
      elem.append(
        El({
          element: 'div',
          className: `${colorStyle[color].bg} w-8 h-8 flex items-center justify-center rounded-full cursor-pointer `,
          children: [
            El({
              element: 'span',
              className: colorStyle[color].fill,
              innerHTML: svgs.Check,
            }),
          ],
          onclick: (e) => {
            productInfo.color = color;
            renderColor(colors, i);
          },
        })
      );
    } else {
      elem.append(
        El({
          element: 'div',
          className: `${colorStyle[color].bg} w-8 h-8 flex items-center justify-center rounded-full cursor-pointer `,
          onclick: (e) => {
            productInfo.color = color;
            renderColor(colors, i);
          },
        })
      );
    }
  });
};

const productSwiper = () => {
  const swiper = new Swiper('.pswiper', {
    loop: true,
    autoplay: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  });
};

export const SingleProduct = (product) => {
  setTimeout(() => {
    renderSize(product.sizes);
    renderColor(product.colors);
    productSwiper();
  }, 0);
  // initialize product info
  productInfo = {
    id: '',
    name: '',
    img: '',
    size: 0,
    color: '',
    quantity: 1,
    totalPrice: 0,
  };
  productInfo.id = product.id;
  productInfo.name = product.name;
  productInfo.img = product.imageURL;
  productInfo.size = product.sizes[0];
  productInfo.color = product.colors[0];
  productInfo.totalPrice += product.price;
  return El({
    element: 'div',
    className: 'relative w-full h-full flex flex-col items-start justify-start',
    children: [
      El({
        element: 'span',
        className: 'absolute left-10 top-12 z-50',
        onclick: () => {
          Routes().navigate('/shop');
        },
        innerHTML: svgs.Back,
      }),
      // image section
      El({
        element: 'div',
        className: 'swiper pswiper w-full aspect-square',
        children: [
          El({
            element: 'div',
            className: 'swiper-wrapper',
            children: [
              El({
                element: 'div',
                className: 'swiper-slide',
                children: [
                  El({
                    element: 'img',
                    className: 'w-full h-full',
                    src: product.imageURL,
                  }),
                ],
              }),
              El({
                element: 'div',
                className: 'swiper-slide',
                children: [
                  El({
                    element: 'img',
                    src: 'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/i1-665455a5-45de-40fb-945f-c1852b82400d/react-infinity-run-flyknit-mens-running-shoe-zX42Nc.jpg',
                  }),
                ],
              }),
              El({
                element: 'div',
                className: 'swiper-slide',
                children: [
                  El({
                    element: 'img',
                    src: 'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/i1-5cc7de3b-2afc-49c2-a1e4-0508997d09e6/react-miler-mens-running-shoe-DgF6nr.jpg',
                  }),
                ],
              }),
            ],
          }),
          El({
            element: 'div',
            className: 'swiper-pagination',
          }),
        ],
      }),
      //content section
      El({
        element: 'div',
        className:
          'w-full px-6 gap-3 py-2 flex flex-col items-start justify-between',
        children: [
          // title and rating section
          El({
            element: 'div',
            className:
              'w-full flex flex-col gap-4 pb-2 border-b-2 border-gray-300',
            children: [
              El({
                element: 'div',
                className: 'w-full flex items-center justify-between',
                children: [
                  El({
                    element: 'span',
                    className:
                      'w-[80%] text-shoea text-3xl font-bold whitespace-nowrap truncate',
                    innerText: product.name,
                  }),
                  El({
                    element: 'span',
                    className: 'flex justify-end',
                    onclick: (e) => {
                      getData(`/users?_email=${Cookies.get('shoea')}`).then(
                        (response) => {
                          const user = response.data[0];
                          user.wishlist.push(product);
                          update.put(`/users/${user.id}`, user);
                        }
                      );
                    },
                    innerHTML: svgs.Like,
                  }),
                ],
              }),
              //rating section should be here
              El({
                element: 'div',
                className: 'flex justify-start items-center gap-4',
                children: [
                  El({
                    element: 'span',
                    className: 'bg-gray-200 p-2 rounded-lg font-semibold',
                    innerText: '5,371 sold',
                  }),
                  El({
                    element: 'span',
                    className: '[&_path]:fill-gray-600',
                    innerHTML: svgs.Star,
                  }),
                  El({
                    element: 'span',
                    className: 'text-gray-700 font-semibold',
                    innerText: '4.8 (7,124 reviews)',
                  }),
                ],
              }),
            ],
          }),
          // description section
          El({
            element: 'div',
            className: 'w-full flex flex-col gap-2',
            children: [
              El({
                element: 'span',
                className:
                  'text-shoea text-2xl font-bold whitespace-nowrap truncate',
                innerText: 'Description',
              }),
              El({
                element: 'p',
                className: '',
                innerHTML: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum, sit! <strong>View More ...</strong>`,
              }),
            ],
          }),
          // color and size section
          El({
            element: 'div',
            className: 'w-full flex items-center justify-between gap-4',
            children: [
              // size section
              El({
                element: 'div',
                className: 'w-full flex flex-col gap-2',
                children: [
                  El({
                    element: 'span',
                    className:
                      'text-shoea text-2xl font-bold whitespace-nowrap truncate',
                    innerText: 'Size',
                  }),
                  El({
                    element: 'div',
                    id: 'size',
                    className: 'flex gap-2',
                  }),
                ],
              }),
              // color section
              El({
                element: 'div',
                className: 'w-full flex flex-col gap-2',
                children: [
                  El({
                    element: 'span',
                    className:
                      'text-shoea text-2xl font-bold whitespace-nowrap truncate',
                    innerText: 'Color',
                  }),
                  El({
                    element: 'div',
                    id: 'color',
                    className: 'flex gap-2',
                  }),
                ],
              }),
            ],
          }),
          //Quantity section
          El({
            element: 'div',
            className: 'w-full flex items-center justify-start gap-6',
            children: [
              El({
                element: 'span',
                className: 'text-shoea text-2xl font-bold',
                innerText: 'Quantity',
              }),
              El({
                element: 'div',
                className:
                  'w-36 h-12 bg-gray-200 rounded-full flex items-center justify-between p-4',
                children: [
                  El({
                    element: 'span',
                    innerHTML: svgs.Mines,
                    onclick: (e) => {
                      productInfo.quantity > 1
                        ? productInfo.quantity--
                        : productInfo.quantity;
                      productInfo.totalPrice =
                        product.price * productInfo.quantity;
                      document.getElementById('quantity').innerText =
                        productInfo.quantity;
                      document.getElementById(
                        'total-price'
                      ).innerText = `$ ${productInfo.totalPrice}`;
                    },
                  }),
                  El({
                    element: 'span',
                    id: 'quantity',
                    className: 'font-bold',
                    innerHTML: productInfo.quantity,
                  }),
                  El({
                    element: 'span',
                    innerHTML: svgs.Plus,
                    onclick: (e) => {
                      productInfo.quantity < +product['items_left']
                        ? productInfo.quantity++
                        : productInfo.quantity;
                      productInfo.totalPrice =
                        product.price * productInfo.quantity;
                      document.getElementById('quantity').innerText =
                        productInfo.quantity;

                      document.getElementById(
                        'total-price'
                      ).innerText = `$ ${productInfo.totalPrice}`;
                    },
                  }),
                ],
              }),
            ],
          }),
          // total price and add to cart button
          El({
            element: 'div',
            className:
              'w-full h-full flex items-center gap-4 border-t-2 border-gray-200 pt-4 justify-between',
            children: [
              El({
                element: 'div',
                className: 'flex flex-col items-start justify-between gap-1',
                children: [
                  El({
                    element: 'span',
                    className: 'text-gray-400 font-semibold',
                    innerText: 'Total price',
                  }),
                  El({
                    element: 'span',
                    id: 'total-price',
                    className: 'font-bold text-2xl',
                    innerText: `$ ${productInfo.totalPrice}`,
                  }),
                ],
              }),
              Button({
                child: 'Add to Cart',
                icon: svgs.CartFill,
                variant: 'cart',
                classes: 'font-bold flex items-center justify-center gap-2',
                eventListener: [
                  {
                    event: 'click',
                    callback: (e) => {
                      let isNew = true;
                      cart.forEach((item) => {
                        if (item.id === productInfo.id) {
                          item.quantity += productInfo.quantity;
                          item.totalPrice += productInfo.totalPrice;
                          isNew = false;
                        }
                      });
                      isNew ? cart.push(productInfo) : null;

                      getData(`/users?_email=${Cookies.get('shoea')}`).then(
                        (response) => {
                          console.log(cart);
                          update.patch(`/users/${response.data[0].id}`, {
                            cart,
                          });
                        }
                      );
                      Routes().navigate('/shop');
                    },
                  },
                ],
              }),
            ],
          }),
        ],
      }),
    ],
  });
};
