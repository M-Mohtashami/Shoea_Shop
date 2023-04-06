import { El } from "@/library"

export const StartSlide =(slide)=>{
    return El({
        element:'div',
        className:'swiper-slide w-full flex flex-col',
        children:[
            El({
                element:'div',
                className:'w-full',
                children:[
                    El({
                        element:'img',
                        className:'w-full h-full',
                        src:slide.src
                    }),
                ]
            }),
            El({
                element:'div',
                className:'w-full flex items-center justify-center',
                children:[
                    El({
                        element:'span',
                        className:'w-full px-4 py-4 text-center text-black text-[28px] font-semibold mx-1',
                        innerText:slide.text
                    }),
                ]
            }),
        ]
    })
}