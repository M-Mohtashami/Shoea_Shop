import { El } from '@/library';
import { onBoarding } from '@/Screens';
export const app = () => {
  return El({
    element:'div',
    className:'h-full',
    children:[onBoarding()]
  })
};
