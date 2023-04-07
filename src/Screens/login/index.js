import { Button, Textfield } from "@/components"
import { El } from "@/library"
import { svgs } from "@/svgs"

const emailVlidationCheck = (email)=>{
    const re = new RegExp("[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,3}");
    return re.test(email)
}
const passVlidationCheck = (pass)=>{
    const re = new RegExp("^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$");
    return re.test(pass)
}

export const Login =()=>{
    return El({
        element:'div',
        className:'w-full h-full flex flex-col items-center justify-end pb-8',
        children:[
            El({
                element:'span',
                // className:'[&_path]:fill-blue-500 [&_path]:stroke-red-500',
                innerHTML:svgs.Logo
            }),
            El({
                element:'span',
                className:'text-black text-[32px] text-center font-semibold mt-24',
                innerText:'Login to Your Account'
            }),
            El({
                element:'form',
                id:'login-form',
                className:'w-full px-8 text-center flex flex-col gap-6 mt-10',
                eventListener:[
                    {
                        event:'change',
                        callback:(e)=>{
                            const loginBtn = document.getElementById('login-btn');
                            if(emailVlidationCheck(e.currentTarget.email.value) && passVlidationCheck(e.currentTarget.password.value)){
                                loginBtn.classList.remove('bg-opacity-50')
                                
                            }
                            else{
                                loginBtn.classList.add('bg-opacity-50')
                            }
                             }
                    }
                ],
                children:[
                    Textfield({
                        icon:svgs.Email,
                        placeholder:'Email',
                        name:'email',
                        type:'email',
                        eventListener:[
                            {
                                event:'input',
                                callback:(e)=>{
                                    const parent = e.currentTarget.parentElement;
                                    emailVlidationCheck(e.currentTarget.value) ? (parent.classList.remove('opacity-50','border-2', 'border-black'),parent.classList.add('border-2', 'border-black')) : (parent.classList.add('opacity-50'),parent.classList.remove('border-2', 'border-black'));
                                }
                            }
                        ]
                    }),
                    Textfield({
                        icon:svgs.Lock,
                        info:svgs.PassHide,
                        placeholder:'Password',
                        type:'password',
                        name:'password',
                        eventListener:[
                            {
                                event:'input',
                                callback:(e)=>{
                                    const parent = e.currentTarget.parentElement;
                                    passVlidationCheck(e.currentTarget.value) ? (parent.classList.remove('opacity-50','border-2', 'border-black'),parent.classList.add('border-2', 'border-black')) : (parent.classList.add('opacity-50'),parent.classList.remove('border-2', 'border-black'));
                                }
                            }
                        ]
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
                }),
                Button({
    child:'Sign in',
    id:'login-btn',
    type:'submit',
    classes:'w-full mt-28 bg-opacity-50'
                })
                ]
            }),
        ]
    })
}