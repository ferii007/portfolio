
import { useEffect } from "react"
import { HeroAvatarAnimate, EmoticonSectionAnimate } from "./HeroSectionAnimate";


const HeroSection = () => {

    useEffect(() => {
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
        }else {
            hello.innerHTML = "Haii, Everyone";
        }
    }, []);

    return(
        <article>
            <div className="flex flex-wrap md:grid md:grid-cols-3 md:grid-rows-1">
                <div className="w-full md:col-span-4 md:col-start-1 md:row-start-1 md:translate-y-16">
                    <h1 className="text-title font-fredoka-one" id="hello">.</h1>

                    <h2 className="text-secondary-title font-righteous mt-2">
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