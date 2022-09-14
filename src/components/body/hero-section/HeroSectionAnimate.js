
import { useEffect, useState } from "react"
import lottie from "lottie-web"
import {heroAvatarAnimation, emoticonData, happyEmotion, indifferentEmotion, sadEmotion, angryEmotion, anxiousEmotion} from "./../../../data/Hero";

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

export const EmoticonSectionAnimate = () => {

    const[emoticonState, setEmoticonState] = useState();

    useEffect(() => {
        const happyEmoticonCanvas = document.getElementById(happyEmotion.emoticonCanvasID);
        const indifferentEmoticonCanvas = document.getElementById(indifferentEmotion.emoticonCanvasID);
        const sadEmoticonCanvas = document.getElementById(sadEmotion.emoticonCanvasID);
        const angryEmoticonCanvas = document.getElementById(angryEmotion.emoticonCanvasID);
        const anxiousEmoticonCanvas = document.getElementById(anxiousEmotion.emoticonCanvasID);

        const happyEmoticonLoadAnimation = lottie.loadAnimation({
            name: happyEmotion.name,
            renderer: 'svg',
            loop: true,
            autoplay: false,
            animationData: happyEmotion.emoticonAnimation,
            container: happyEmoticonCanvas,
        });

        const indifferentEmoticonLoadAnimation = lottie.loadAnimation({
            name: indifferentEmotion.name,
            renderer: 'svg',
            loop: true,
            autoplay: false,
            animationData: indifferentEmotion.emoticonAnimation,
            container: indifferentEmoticonCanvas,
        });

        const sadEmoticonLoadAnimation = lottie.loadAnimation({
            name: sadEmotion.name,
            renderer: 'svg',
            loop: true,
            autoplay: false,
            animationData: sadEmotion.emoticonAnimation,
            container: sadEmoticonCanvas,
        });

        const angryEmoticonLoadAnimation = lottie.loadAnimation({
            name:angryEmotion.name,
            renderer: 'svg',
            loop: true,
            autoplay: false,
            animationData:angryEmotion.emoticonAnimation,
            container:angryEmoticonCanvas,
        });

        const anxiousEmoticonLoadAnimation = lottie.loadAnimation({
            name: anxiousEmotion.name,
            renderer: 'svg',
            loop: true,
            autoplay: false,
            animationData: anxiousEmotion.emoticonAnimation,
            container: anxiousEmoticonCanvas,
        });

        happyEmoticonCanvas.addEventListener('click' , function() {
            emoticonIndex(happyEmotion.id);
            happyEmotion.emoticonPlay = true
            indifferentEmotion.emoticonPlay = false
            sadEmotion.emoticonPlay = false
            angryEmotion.emoticonPlay = false
            anxiousEmotion.emoticonPlay = false
        });

        indifferentEmoticonCanvas.addEventListener('click' , function() {
            emoticonIndex(indifferentEmotion.id);
            indifferentEmotion.emoticonPlay = true
            happyEmotion.emoticonPlay = false
            sadEmotion.emoticonPlay = false
            angryEmotion.emoticonPlay = false
            anxiousEmotion.emoticonPlay = false
        });

        sadEmoticonCanvas.addEventListener('click' , function() {
            emoticonIndex(sadEmotion.id);
            sadEmotion.emoticonPlay = true
            happyEmotion.emoticonPlay = false
            indifferentEmotion.emoticonPlay = false
            angryEmotion.emoticonPlay = false
            anxiousEmotion.emoticonPlay = false
        });

        angryEmoticonCanvas.addEventListener('click' , function() {
            emoticonIndex(angryEmotion.id);
            angryEmotion.emoticonPlay = true
            happyEmotion.emoticonPlay = false
            indifferentEmotion.emoticonPlay = false
            sadEmotion.emoticonPlay = false
            anxiousEmotion.emoticonPlay = false
        });

        anxiousEmoticonCanvas.addEventListener('click' , function() {
            emoticonIndex(anxiousEmotion.id);
            anxiousEmotion.emoticonPlay = true
            happyEmotion.emoticonPlay = false
            indifferentEmotion.emoticonPlay = false
            sadEmotion.emoticonPlay = false
            angryEmotion.emoticonPlay = false
        });

        happyEmoticonCanvas.addEventListener('mouseenter', function() {
            if (happyEmotion.emoticonPlay === false) {
                happyEmoticonLoadAnimation.goToAndPlay(15, true)
            }
        });

        happyEmoticonCanvas.addEventListener('mouseleave', function() {
            if (happyEmotion.emoticonPlay === false) {
                happyEmoticonLoadAnimation.goToAndStop(15, true)
            }
        });

        indifferentEmoticonCanvas.addEventListener('mouseenter', function() {
            if (indifferentEmotion.emoticonPlay === false) {
                indifferentEmoticonLoadAnimation.goToAndPlay(0, true)
            }
        });

        indifferentEmoticonCanvas.addEventListener('mouseleave', function() {
            if (indifferentEmotion.emoticonPlay === false) {
                indifferentEmoticonLoadAnimation.goToAndStop(0, true)
            }
        });

        sadEmoticonCanvas.addEventListener('mouseenter', function() {
            if (sadEmotion.emoticonPlay === false) {
                sadEmoticonLoadAnimation.goToAndPlay(0, true)
            }
        });

        sadEmoticonCanvas.addEventListener('mouseleave', function() {
            if (sadEmotion.emoticonPlay === false) {
                sadEmoticonLoadAnimation.goToAndStop(0, true)
            }
        });

        angryEmoticonCanvas.addEventListener('mouseenter', function() {
            if (angryEmotion.emoticonPlay === false) {
                angryEmoticonLoadAnimation.goToAndPlay(0, true)
            }
        });

        angryEmoticonCanvas.addEventListener('mouseleave', function() {
            if (angryEmotion.emoticonPlay === false) {
                angryEmoticonLoadAnimation.goToAndStop(0, true)
            }
        });

        anxiousEmoticonCanvas.addEventListener('mouseenter', function() {
            if (anxiousEmotion.emoticonPlay === false) {
                anxiousEmoticonLoadAnimation.goToAndPlay(0, true)
            }
        });

        anxiousEmoticonCanvas.addEventListener('mouseleave', function() {
            if (anxiousEmotion.emoticonPlay === false) {
                anxiousEmoticonLoadAnimation.goToAndStop(0, true)
            }
        });

        happyEmoticonLoadAnimation.goToAndStop(15, true);

        const emoticonIndex = (index) => {
            setEmoticonState(index);
        
            switch (index) {
                case 0:
                    happyEmoticonLoadAnimation.goToAndPlay(15, true)
                    indifferentEmoticonLoadAnimation.goToAndStop(0, false)
                    sadEmoticonLoadAnimation.goToAndStop(0, true)
                    angryEmoticonLoadAnimation.goToAndStop(0, true)
                    anxiousEmoticonLoadAnimation.goToAndStop(0, true)
                    break;
    
                case 1:
                    indifferentEmoticonLoadAnimation.goToAndPlay(0, true)
                    happyEmoticonLoadAnimation.goToAndStop(15, true)
                    sadEmoticonLoadAnimation.goToAndStop(0, true)
                    angryEmoticonLoadAnimation.goToAndStop(0, true)
                    anxiousEmoticonLoadAnimation.goToAndStop(0, true)
                    break;
    
                case 2:
                    sadEmoticonLoadAnimation.goToAndPlay(0, true)
                    happyEmoticonLoadAnimation.goToAndStop(15, true)
                    indifferentEmoticonLoadAnimation.goToAndStop(0, true)
                    angryEmoticonLoadAnimation.goToAndStop(0, true)
                    anxiousEmoticonLoadAnimation.goToAndStop(0, true)
                    break;
    
                case 3:
                    angryEmoticonLoadAnimation.goToAndPlay(0, true)
                    happyEmoticonLoadAnimation.goToAndStop(15, true)
                    indifferentEmoticonLoadAnimation.goToAndStop(0, true)
                    sadEmoticonLoadAnimation.goToAndStop(0, true)
                    anxiousEmoticonLoadAnimation.goToAndStop(0, true)
                    break;
    
                case 4:
                    anxiousEmoticonLoadAnimation.goToAndPlay(0, true)
                    angryEmoticonLoadAnimation.goToAndStop(0, true)
                    happyEmoticonLoadAnimation.goToAndStop(15, true)
                    indifferentEmoticonLoadAnimation.goToAndStop(0, true)
                    sadEmoticonLoadAnimation.goToAndStop(0, true)
                    break;
                default:
                    break;
            }
        }
    
    }, []);


    return(
        <div className="w-full md:w-80 lg:w-96 md:col-start-1 md:row-start-1 order-last p-0 md:translate-y-40">
            <div className="text-secondary-title grid grid-cols-6 md:grid-cols-4 grid-rows-2 md:grid-rows-3 lg:flex lg:flex-nowrap gap-0 py-2 border-t-2 border-colorDark dark:border-colorLight transition-01">
                {
                    emoticonData.map((emoticon) => (
                        <div key={emoticon.id} className={`text-primaryLight dark:text-primaryDark grid justify-items-center col-span-2 ${emoticon.id === 0 ? 'md:row-start-1 md:col-start-1 md:col-end-2' : emoticon.id === 1 ? 'md:row-start-2 md:col-start-2 md:col-end-3' : emoticon.id === 3 ? 'md:row-start-3 col-start-2 col-end-4 md:col-start-1 md:col-end-2' : emoticon.id === 4 ? 'md:row-start-3 col-start-4 col-end-6 md:col-start-3 md:col-end-4' : 'block'} group`}>
                            <div className="w-20 md:w-14 lg:w-20 cursor-pointer" id={emoticon.emoticonCanvasID} />

                            <span className={`${emoticonState === emoticon.id ? 'opacity-100' : 'opacity-0'} cursor-default group-hover:opacity-100 transition-02`} id={emoticon.emoticonLabelID}>
                                {emoticon.label}
                            </span>
                        </div>
                    ))
                }
            </div>

            <div className="flex justify-center md:justify-start">
                {
                    emoticonData.map((emoticon, i) => (
                        <q key={i} className={`text-sub-title ${emoticonState === emoticon.id ? 'block' : 'hidden'}`}>
                            {emoticon.emoticonQuote}
                        </q>
                    ))
                }
            </div>
        </div>
    )

}