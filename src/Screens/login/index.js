import { Button, Textfield } from "@/components"
import { El } from "@/library"
import { svgs } from "@/svgs"

const emailVlidationCheck = (email)=>{
    const re = new RegExp("^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$");
    
    
}
export const Login =()=>{
    return El({
        element:'div',
        className:'w-full h-full flex flex-col items-center justify-end pb-8',
        children:[
            El({
                element:'span',
                innerHTML:svgs.Logo
            }),
            El({
                element:'span',
                className:'text-black text-[32px] text-center font-semibold mt-24',
                innerText:'Login to Your Account'
            }),
            El({
                element:'form',
                className:'w-full px-8 text-center flex flex-col gap-6 mb-36 mt-10',
                children:[
                    Textfield({
                        icon:svgs.Email,
                        placeholder:'Email',
                        type:'email',
                    }),
                    Textfield({
                        icon:svgs.Lock,
                        info:svgs.PassHide,
                        placeholder:'Password',
                        type:'password',
                    }),
                El({
                    element:'div',
                    className:'flex items-center justify-center gap-1',
                    children:[
                        El({
                            element:'input',
                            id:'remember',
                            name:'remember',
                            className:'border border-gray-200  rounded-sm checked:bg-black focus:ring-transparent',
                            type:'checkbox'
                        }),
                        El({
                            element:'label',
                            for:'remember',
                            className:'text-[16px]',
                            innerText:'Remember me',
                        }),
                    ]
                })
                ]
            }),
            Button({
child:'Sign in',
classes:'bg-opacity-50'
            })
        ]
    })
}