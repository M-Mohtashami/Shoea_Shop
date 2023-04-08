import { El } from '@/library';
import { onBoarding } from '@/Screens';
import { Routes } from '@/Routes';
export const app = () => {
  return El({
    element:'div',
    id:'router',
    className:'h-full',
    children:[Routes()[0]]
  })
};
