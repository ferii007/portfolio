
import { useEffect, useState } from "react"
import EmoticonSectionAnimate from './EmoticonSectionAnimate';
import HeroAvatarAnimate from "./HeroAvatarAnimate";


const HeroSection = () => {

    const [greetingState, setGreetingState] = useState('Haii')

    useEffect(() => {
        const today = new Date();
        const hours = today.getHours();

        if(hours <= 12) {
            setGreetingState('Haii, Good Morning');
        } 
        else if(hours <= 18) {
            setGreetingState('Haii, Good Afternoon');
        }
        else if(hours <= 24) {
            setGreetingState('Haii, Good Evening');
        }
    }, []);

    return(
        <article className="max-width-01">
            <div className="flex flex-wrap md:grid md:grid-cols-3 md:grid-rows-1">
                <div className="w-full md:col-span-4 md:col-start-1 md:row-start-1 md:translate-y-16">
                    <h1 className="text-title">{greetingState}</h1>

                    <h2 className="text-secondary-title mt-2">
                        How Do You Feel Today?
                    </h2>
                </div>

                <EmoticonSectionAnimate />

                <HeroAvatarAnimate />
            </div>
        </article>
    )

}

export default HeroSection