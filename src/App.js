import { El } from '@/library';
import { onBoarding } from '@/Screens';
import { Routes } from '@/Routes';
export const app = () => {
  return El({
    element:'div',
    className:'h-full',
    children:[Routes()]
  })
};
