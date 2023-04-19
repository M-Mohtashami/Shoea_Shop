import { onBoarding, Login, Shop, Cart, Checkout } from '@/Screens';
import { getData } from '@/api';
import { SingleProduct } from '@/layout';
import { El } from '@/library';
import Navigo from 'navigo';
import Cookies from 'js-cookie';
import { Address } from '@/Screens/Checkout/Address';
import { Shipping } from '@/Screens/Checkout/Shipping';
import { Payment } from '@/Screens/Checkout/Payment';
import { Orders } from '@/Screens/Orders';
import { brandPage } from '@/Screens/Shop/brandPage';
import { mostPopular } from '@/Screens/Shop/mostPopular';
import { SearchSection } from '@/Screens/Search';
import { wishlist } from '@/Screens/Shop/wishlist';

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
  });
  router.on('/search', function () {
    applyRouting(SearchSection());
  });
  router.on('/products/:id', function (res) {
    getData(`/products/${res.data.id}`).then((response) => {
      applyRouting(SingleProduct(response.data));
    });
  });
  router.on('/brand/:brand', function (res) {
    getData(`/products?brand=${res.data.brand.toUpperCase()}`).then(
      (response) => {
        applyRouting(brandPage(res.data.brand, response.data));
      }
    );
  });
  router.on('/most-popular', function () {
    applyRouting(mostPopular());
  });
  router.on('/wishlist', function () {
    applyRouting(wishlist());
  });
  router.on('/cart', function () {
    applyRouting(Cart());
  });
  router.on('/checkout', function () {
    applyRouting(Checkout());
  });
  router.on('/shipping-address', function () {
    applyRouting(Address());
  });
  router.on('/shipping-method', function () {
    applyRouting(Shipping());
  });
  router.on('/payment-method', function () {
    applyRouting(Payment());
  });
  router.on('/orders', function () {
    applyRouting(Orders());
  });
  router.resolve();
  return router;
};
