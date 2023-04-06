import { spiner } from "@/components"
import { El } from "@/library"
import { svgs } from "@/svgs"

export const Loading=()=>{
    return El({
        element:'div',
        className:'w-full h-full flex flex-col items-center justify-end gap-20',
        children:[
            El({
                element:'div',
                className:'flex items-center justify-center gap-2',
                children:[
                    El({
                        element:'span',
                        innerHTML: svgs.Shoea
                    }),
                    El({
                        element:'span',
                        className:'text-shoea font-bold text-[52px]',
                        innerText: 'Shoea'
                    })
                ]
            }),
            El({
                element:'div',
                className:'my-28',
                children:[  spiner()]
            })

        ]
    })
}