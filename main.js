// import styles bundle
import 'swiper/css/bundle';
import './src/styles/index.css';
import { app } from './src/App';
import {Routes} from './src/Routes'


const shoea = document.getElementById('app');

Routes().navigate('/shop')
// shoea.appendChild(app());
shoea.classList.add('h-full','font-inter');
