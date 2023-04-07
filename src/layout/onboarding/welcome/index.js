import { El } from "@/library"


export const Welcome=()=>{
    return El({
        element:'div',
        id:'welcome',
        className:'w-full h-full bg-welcome-img bg-cover bg-bottom transition ease-linear duration-500 transform translate-x-full',
        children:[
            El({
                element:'div',
                className:'w-full h-full flex flex-col items-start justify-end gap-2 pl-8 pb-16',
                children:[
                    El({
                        element:'div',
                        className:'flex items-center gap-4',
                        children:[
                            El({
                                element:'span',
                                className:'text-white text-[40px] font-semibold',
                                innerText: 'Welcome to'
                            }),
                            El({
                                element:'img',
                                className:'',
                                src:'/images/hand.png'
                            })
                        ]
                    }),
                    El({
                        element:'span',
                        className:'text-white text-[72px] font-bold',
                        innerText: 'Shoea'
                    }),
                    El({
                        element:'span',
                        className:'text-white text-[16px] font-semibold',
                        innerText: 'The best sneakers & shoes e-commerse app of the century for your fashion needs!'
                    }),
                    ]
            })
        ]
    })
}