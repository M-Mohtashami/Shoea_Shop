import { Loading,Welcome,StartSlider } from "@/layout"
import { El } from "@/library";

export const onBoarding = ()=>{

setTimeout(()=>{
    const getStarted = document.getElementById('get-started');
    getStarted.classList.add('-translate-x-full');
    getStarted.innerHTML =''
    getStarted.appendChild(Welcome());
    setTimeout(()=>{
    // const welcome = document.getElementById('welcome');
    // welcome.classList.toggle('translate-x-full');
    getStarted.innerHTML =''
    getStarted.appendChild(StartSlider());
    },2000)
},2000)
return El({
    element:'div',
    className:'h-full transition ease-linear duration-500 transform',
    id:'get-started',
    children:[Loading()]
});
}
