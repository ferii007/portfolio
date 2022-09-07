
import React from 'react';
import lottie from "lottie-web";
import heroAvatarAnimated from './../../../assets/animations/hero-avatar.json';
import happyEmoticonAnimated from './../../../assets/animations/happy-emoticon.json';
import indifferentEmoticonAnimated from './../../../assets/animations/indifferent-emoticon.json';
import sadEmoticonAnimated from './../../../assets/animations/sad-emoticon.json';
import angryEmoticonAnimated from './../../../assets/animations/angry-emoticon.json';
    


export const emoticons = [
    {   
        id: 0,
        name: 'Happy Emoticon',
        emoticonTitle: 'Happy',
        emoticonAnimation: happyEmoticonAnimated,
        emoticonCanvasID: 'happy-emoticon-canvas',
        emoticonTitleID: 'HappyEmoticon',
        emoticonQuote: 'Ini Quote ketika user klik emoticon Happy'
    },

    {
        id: 1,
        name: 'Indifferent Emoticon',
        emoticonTitle: 'Indifferent',
        emoticonAnimation: indifferentEmoticonAnimated,
        emoticonCanvasID: 'indifferent-emoticon-canvas',
        emoticonTitleID: 'IndifferentEmoticon',
        emoticonQuote: 'Ini Quote ketika user klik emoticon Indifferent'
    },

    {
        id: 2,
        name: 'Sad Emoticon',
        emoticonTitle: 'Sad',
        emoticonAnimation: sadEmoticonAnimated,
        emoticonCanvasID: 'sad-emoticon-canvas',
        emoticonTitleID: 'SadEmoticon',
        emoticonQuote: 'Ini Quote ketika user klik emoticon Sad'
    },

    {
        id: 3,
        name: 'Angry Emoticon',
        emoticonTitle: 'Angry',
        emoticonAnimation: angryEmoticonAnimated,
        emoticonCanvasID: 'angry-emoticon-canvas',
        emoticonTitleID: 'AngryEmoticon',
        emoticonQuote: 'Ini Quote ketika user klik emoticon Angry'
    },
]

export const HeroSectionAnimate = () => {

    React.useEffect(() => {

        // Hero Avatar Animation
            const heroAvatarCanvas = document.querySelector('#hero-avatar-canvas');
            const heroAvatar = lottie.loadAnimation({
                container: heroAvatarCanvas,
                animationData: heroAvatarAnimated,
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
        // End Hero Avatar Animation

        
        // Emoticons Animation

            for (let i = 0; i < emoticons.length; i++) {
                const emoticon = emoticons[i];
                const emoticonCanvas = document.querySelector(`#${emoticon.emoticonCanvasID}`);
                const emotion = lottie.loadAnimation({
                    container: emoticonCanvas,
                    animationData: emoticon.emoticonAnimation,
                    renderer: 'svg',
                    loop: true,
                    autoplay: false,
                    name: emoticon.name
                });

                if (emoticon.name === 'Happy Emoticon') {   
                    emotion.goToAndStop(15, true);
                }

                emoticonCanvas.onmouseenter = () => {
                    emotion.goToAndPlay(15, true);
                    document.querySelector(`#${emoticon.emoticonTitleID}`).classList.remove('opacity-0');
                }

                emoticonCanvas.onmouseleave = () => {
                    if (emoticon.name === 'Happy Emoticon') {
                        emotion.goToAndStop(15, true);
                    }else {
                        emotion.goToAndStop(0, true);
                    }

                    document.querySelector(`#${emoticon.emoticonTitleID}`).classList.add('opacity-0');
                }
            }
        // End Emoticons Animation

    }, []);

}

// export default HeroSectionAnimate;