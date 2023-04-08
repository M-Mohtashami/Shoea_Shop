import { onBoarding,Login } from "@/Screens"
import { El } from "@/library"
import {router} from '../../main'

export const Routes = ()=>{
    
    const routeEl = document.getElementById('router') || El({element:'div', className:'h-full'})
routeEl.innerHTML =''
    router.on('/welcome',function(){
        console.log('welcome');
        routeEl.appendChild(onBoarding())
    })
    router.on('/login',function(){
        console.log('login');
        routeEl.appendChild(Login())
    })
    router.resolve();
return [routeEl,router]
}