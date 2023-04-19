// import styles bundle
import 'swiper/css/bundle';
import './src/styles/index.css';
import { app } from './src/App';
import { Routes } from './src/Routes';
import Cookies from 'js-cookie';

const shoea = document.getElementById('app');

Routes();
if (
  Cookies.get('shoea') &&
  (location.pathname === '/' || location.pathname === '/login')
) {
  Routes().navigate('/shop');
} else {
  Routes().navigate(location.pathname);
}
// shoea.appendChild(app());
shoea.classList.add('h-full', 'font-inter');
