import { StartSlide,Button } from "@/components"
import { El } from "@/library"
// import Swiper bundle with all modules installed
import Swiper from 'swiper/bundle';

const slides = [
    {
        text:'We provide high quality products just for you',
        src:'/images/Wallpaper_slide1.jpg'
    },
    {
        text:'Your satisfaction is our number one periority',
        src:'/images/Wallpaper_slide2.jpg'
    },
    {
        text:'Let’s fulfill your fashion needs with shoearight now!',
        src:'/images/Wallpaper_slide3.jpg'
    },
]
let counter = 1

const createSwiper = ()=>{
    const swiper = new Swiper('.swiper', {
        // Optional parameters
        loop: false,
        allowTouchMove: false,     
        // If we need pagination
        pagination: {
          el: '.swiper-pagination',
        },
      
        // Navigation arrows
        // navigation: {
        //   nextEl: '.swiper-button-next',
        // },

      });
      
}

export const StartSlider =()=>{
    setTimeout(createSwiper,10)
    return El({
        element:'div',
        className:'w-full flex flex-col items-center justify-between',
        children:[
            El({
                element:'div',
                className:'w-full h-[60%] swiper',
                children:[
                    El({
                        element:'div',
                        className:'swiper-wrapper mb-10',
                        children:[...slides.map(item=>StartSlide(item))]
                    }),
                    El({
                        element:'div',
                        className:'swiper-pagination'
                    }),
                ]
            }),
            El({
                element:'div',
                className:'w-full text-center mt-8',
                children:[
                    Button({
                        child:'Next',
                        eventListener:[
                            {
                                event:'click',
                                callback:(e)=>{
                                    const swiper = document.querySelector('.swiper').swiper;
                                    // Now you can use all slider methods like
                                    console.log(counter,slides.length)
                                    swiper.slideNext()
                                    counter++ == slides.length - 1 ? (e.target.innerText='Get Started', counter = 1):null;

                                }

                            }
                        ]
                    })
                ]
            }),

        ]
    })
}