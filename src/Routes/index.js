import { onBoarding,Login } from "@/Screens"
import { El } from "@/library"

export const Routes = ()=>{
    
const routeEl = El({element:'div', className:'h-full'})
routeEl.appendChild(Login())
return routeEl
}