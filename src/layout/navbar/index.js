import {El} from '@/library'
import {svgs} from '@/svgs'
import {Routes} from '@/Routes'

const icons={
    "shop":svgs.HomeFill,
    "cart":svgs.CartFill,
    "orders":svgs.OrderFill,
    "wallet":svgs.WalletFill,
    "profile":svgs.UserFill
}
// const navbarHandler = (target="shop")=>{
//     setTimeout(()=>{
//     const icon = document.getElementById(target)
//     icon.innerHTML = icons[target];
//     },0)
//     return renderNavbar()

// }

export const renderNavbar =()=>{
    const nav = document.getElementById('nav-bar') || El({
        element:'div',
        className:'fixed bottom-0 w-full h-16',
    })
    nav.classList.add('flex', 'items-center', 'justify-between', 'px-8','border-t','shadow')
    nav.innerHTML='';
    nav.append(
        El({
            element:'div',
            className:'flex flex-col items-center justify-center gap-1',
            eventListener:[
                {
                    event:'click',
                    callback:(e)=>{ 
                        Routes().navigate('shop')
                    }
                }
            ],
            children:[
                El({
                    element:'span',
                    id:'shop',
                    className:'[&_path]:fill-btn',
                    innerHTML:svgs.Home
                }),
                El({
                    element:'span',
                    className:'text-shoea font-semibold text-[10px]',
                    innerText:'Home'
                })
            ]
        }),
        El({
            element:'div',
            className:'flex flex-col items-center justify-center gap-1',
            eventListener:[
                {
                    event:'click',
                    callback:(e)=>{
                        Routes().navigate('/cart')
                    }
                }
            ],
            children:[
                El({
                    element:'span',
                    id:'cart',
                    className:'[&_path]:fill-btn',
                    innerHTML:svgs.Cart
                }),
                El({
                    element:'span',
                    className:'text-shoea font-semibold text-[10px]',
                    innerText:'Cart'
                })
            ]
        }),
        El({
            element:'div',
            className:'flex flex-col items-center justify-center gap-1',
            eventListener:[
                {
                    event:'click',
                    callback:(e)=>{
                        Routes().navigate('/orders')
                    }
                }
            ],
            children:[
                El({
                    element:'span',
                    id:'orders',
                    className:'[&_path]:fill-btn',
                    innerHTML:svgs.Order
                }),
                El({
                    element:'span',
                    className:'text-shoea font-semibold text-[10px]',
                    innerText:'Orders'
                })
            ]
        }),
        El({
            element:'div',
            className:'flex flex-col items-center justify-center gap-1',
            eventListener:[
                {
                    event:'click',
                    callback:(e)=>{
                        Routes().navigate('/wallet')
                    }
                }
            ],
            children:[
                El({
                    element:'span',
                    id:'wallet',
                    className:'[&_path]:fill-btn',
                    innerHTML:svgs.Wallet
                }),
                El({
                    element:'span',
                    className:'text-shoea font-semibold text-[10px]',
                    innerText:'Wallet'
                })
            ]
        }),
        El({
            element:'div',
            className:'flex flex-col items-center justify-center gap-1',
            eventListener:[
                {
                    event:'click',
                    callback:(e)=>{
                        Routes().navigate('/profile')
                    }
                }
            ],
            children:[
                El({
                    element:'span',
                    id:'profile',
                    className:'[&_path]:fill-btn',
                    innerHTML:svgs.User
                }),
                El({
                    element:'span',
                    className:'text-shoea font-semibold text-[10px]',
                    innerText:'Profile'
                })
            ]
        }),
    )
    return nav
}

export const navbar = (target)=>{
    setTimeout(()=>{
        const icon = document.getElementById(target)
        icon.innerHTML = icons[target];
        },0)

    return El({
        element:'div',
        id:'nav-bar',
        className:'fixed bottom-0 w-full h-16',
        children:[
            renderNavbar()
        ]
    })
}