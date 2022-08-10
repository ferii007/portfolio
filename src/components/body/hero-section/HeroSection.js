import React from "react";
import HeroSectionAnimate from "./HeroSectionAnimate"

const HeroSection = () => {

    React.useEffect(() => {

        // const letsBeginBtn = document.querySelector('#lets-begin');
        // const aboutSection = document.querySelector('#about');

        // letsBeginBtn.addEventListener('click', function() {
        //     aboutSection.classList.remove('hidden')
        // });

        let hello = document.querySelector('#hello');
        const today = new Date();
        const hours = today.getHours();

        if(hours <= 12) {
            hello.innerHTML = "Haii, Good Morning";
        } 
        else if(hours <= 18) {
            hello.innerHTML = "Haii, Good Afternoon";
        }
        else if(hours <= 24) {
            hello.innerHTML = "Haii, Good Evening";
        }

    }, []);

    return(
        <div className="container">
            <div className="flex flex-wrap md:grid md:grid-cols-3 md:grid-rows-1 md:gap-6 md:-translate-y-5">
                <div className="w-full md:col-span-4 md:row-start-1 md:col-start-1 md:translate-y-16">
                    <h1 className="text-title" id="hello">Hello World</h1>

                    <h2 className="text-sub-title mt-2 transition-all duration-300">
                        I'm <span className="text-secondaryLight dark:text-secondayDark">Feri Ramdani</span>
                    </h2>
                </div>

                <div className="order-last p-0 w-full md:-w-80 lg:w-96 cursor-default md:row-start-1 md:col-start-1 md:translate-y-40">
                    <div className="flex py-2 text-sub-title border-t-2 border-b-2 border-colorDark dark:border-colorLight transition-all duration-300">
                        <h2 className="w-full text-left hover:text-primaryLight dark:hover:text-primaryDark transition-all duration-300">Junior Web Dev</h2>

                        <h2 className="w-full text-right hover:text-primaryLight dark:hover:text-primaryDark transition-all duration-300">Junior Web Dev</h2>
                    </div>
                

                    <div className="flex justify-center md:justify-start">
                        <a href="#about" className="w-48 bg-primaryLight dark:bg-primaryDark text-colorLight dark:text-colorDark hover:bg-primaryDark dark:hover:bg-primaryLight hover:text-colorDark dark:hover:text-colorLight p-4 mt-8 rounded-xl text-xl font-medium text-center transition-all duration-200" id="lets-begin">
                            Let's Begin
                        </a>
                    </div>
                </div>

                <HeroSectionAnimate />
            </div>
        </div>
    )

}

export default HeroSection