// import styles bundle
import 'swiper/css/bundle';
import './src/styles/index.css';
import { app } from './src/App';
import {Routes} from './src/Routes'
import Navigo from "navigo"

const shoea = document.getElementById('app');
export const router = new Navigo('/');
router.navigate('/welcome');
shoea.appendChild(app());
shoea.classList.add('h-full','font-inter');
