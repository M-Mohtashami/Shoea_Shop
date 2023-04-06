// import styles bundle
import 'swiper/css/bundle';
import './src/styles/index.css';
import { app } from './src/App';

const shoea = document.getElementById('app');

shoea.appendChild(app());
shoea.classList.add('h-full','font-inter');
