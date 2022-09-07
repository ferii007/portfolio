
import React from "react";
import {HeroSectionAnimate, emoticons} from "./HeroSectionAnimate"

const HeroSection = () => {

    const[emoticonState, setEmoticonState] = React.useState();

    const emoticonIndex = (index) => {
        setEmoticonState(index);
    }

    
    React.useEffect(() => {

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
                    <h1 className="text-title font-fredoka-one" id="hello">Hello World</h1>

                    <h2 className="text-secondary-title font-righteous mt-2">
                        How Do You Feel Today?
                    </h2>
                </div>

                <div className="order-last p-0 w-full md:-w-80 lg:w-96 cursor-default md:row-start-1 md:col-start-1 md:translate-y-40">
                    <div className="flex gap-6 md:gap-3 justify-center py-2 text-secondary-title border-t-2 border-colorDark dark:border-colorLight transition-01">
                        {
                            emoticons.map((emoticon, i) => (
                                <li key={i} className="emoticon-canvas list-none">
                                    <div className="cursor-pointer emoticon-animation" id={emoticon.emoticonCanvasID} onClick={() => emoticonIndex(emoticon.id)}  />
                                                
                                    <span className="opacity-0 emoticon-title" id={emoticon.emoticonTitleID}>{emoticon.emoticonTitle}</span>
                                </li>
                                    
                            ))
                        }
                    </div>
                

                    <div className="flex justify-center md:justify-start">
                        <div>
                            <q className={`text-sub-title ${emoticonState === 0 ? 'block' : 'hidden'}`} id="emoticon-paragraf">
                                {emoticons[0].emoticonQuote}
                            </q>

                            <q className={`text-sub-title ${emoticonState === 1 ? 'block' : 'hidden'}`} id="emoticon-paragraf">
                                {emoticons[1].emoticonQuote}
                            </q>

                            <q className={`text-sub-title ${emoticonState === 2 ? 'block' : 'hidden'}`} id="emoticon-paragraf">
                                {emoticons[2].emoticonQuote}
                            </q>

                            <q className={`text-sub-title ${emoticonState === 3 ? 'block' : 'hidden'}`} id="emoticon-paragraf">
                                {emoticons[3].emoticonQuote}
                            </q>
                        </div>
                    </div>
                </div>

                <div className='w-full md:h-80 lg:h-96 lg:-translate-y-5 md:row-start-1 md:col-start-4' id='hero-avatar-canvas' />
            </div>

            <HeroSectionAnimate />
        </div>
    )

}

export default HeroSection