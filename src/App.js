import { El } from '@/library';
import { onBoarding } from '@/Screens';
import { Routes,applyRouting } from '@/Routes';

export const app = () => {
  return El({
    element:'div',
    id:'router',
    className:'h-full',
    children:[applyRouting()]
  })
};
