import { onBoarding,Login,Shop,Cart } from "@/Screens"
import { El } from "@/library"
import Navigo from "navigo"

export const router = new Navigo('/');

export const applyRouting=function(child=''){
    const routeEl = document.getElementById('app')
    routeEl.innerHTML =''
    routeEl.append(child)

}

export const Routes = ()=>{
    router.on('/welcome',function(){
        applyRouting(onBoarding())
    })
    router.on('/login',function(){
        applyRouting(Login())
    })
    router.on('/shop',function(){
        applyRouting(Shop())
    })
    router.on('/home',function(){
        applyRouting('Welcome to home')
    })
    router.on('/cart',function(){
        applyRouting(Cart())
    })
    router.resolve();
return router;
}