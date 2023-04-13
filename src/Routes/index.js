import { onBoarding, Login, Shop, Cart } from '@/Screens';
import { getData } from '@/api';
import { SingleProduct } from '@/layout';
import { El } from '@/library';
import Navigo from 'navigo';
import Cookies from 'js-cookie';

const info = {
  name: 'Mohammad',
  img: './images/profile.png',
};

export const router = new Navigo('/');

export const applyRouting = function (child = '') {
  const routeEl = document.getElementById('app');
  routeEl.innerHTML = '';
  routeEl.append(child);
};

export const Routes = () => {
  router.on('/', function () {
    applyRouting(onBoarding());
  });
  router.on('/login', function () {
    applyRouting(Login());
  });
  router.on('/shop', function () {
    // update user info and call shop
    getData(`/users?email=${Cookies.get('shoea')}`).then((response) => {
      info.name = response.data[0].name;
      console.log(info);
      applyRouting(Shop(info));
    });
    // router.destroy();
  });
  router.on('/products/:id', function (res) {
    getData(`/products/${res.data.id}`).then((response) => {
      applyRouting(SingleProduct(response.data));
    });
  });
  router.on('/cart', function () {
    applyRouting(Cart());
  });
  router.resolve();
  return router;
};
