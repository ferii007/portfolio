
import { useEffect, useState } from "react"
import lottie from "lottie-web"
import {heroAvatarAnimation, emoticonData, happyEmotion, indifferentEmotion, sadEmotion, angryEmotion, anxiousEmotion} from "../../../data/Hero";

export const HeroAvatarAnimate = () => {

    useEffect (() => {
        const heroAvatarCanvas = document.querySelector('#hero-avatar-canvas');
            const heroAvatar = lottie.loadAnimation({
                container: heroAvatarCanvas,
                animationData: heroAvatarAnimation,
                renderer: 'svg',
                loop: true,
                autoplay: false,
                name: "Hero Avatar",
            }); 

            heroAvatar.goToAndStop(90, true);
            heroAvatar.playSegments([20, 48], false);

            heroAvatarCanvas.addEventListener('click', function() {
                heroAvatar.playSegments([48, 90], false);
                heroAvatar.goToAndStop(90, true);
                heroAvatar.playSegments([20, 48], false);
            });
    }, []);


    return(
        <div className="w-full md:h-80 lg:h-96 md:row-start-1 md:col-start-4" id="hero-avatar-canvas" />
    )

}

export default HeroAvatarAnimate
