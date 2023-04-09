import {El} from '@/library'
import {navbar} from '@/layout'

export const Shop=()=>{
    return El({
        element:'div',
        className:'h-full flex flex-col items-center justify-end',
        children:[
            navbar('shop')
        ]
    })
}