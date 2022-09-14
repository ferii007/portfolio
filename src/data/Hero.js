
import heroAvatarAnimated from './../assets/animations/hero-avatar.json'
import happyEmoticonAnimated from './../assets/animations/happy-emoticon.json';
import indifferentEmoticonAnimated from './../assets/animations/indifferent-emoticon.json';
import sadEmoticonAnimated from './../assets/animations/sad-emoticon.json';
import angryEmoticonAnimated from './../assets/animations/angry-emoticon.json';
import anxiousEmoticonAnimated from './../assets/animations/anxious-emoticon.json';


export const heroAvatarAnimation = heroAvatarAnimated

export const emoticonData = [
    {
        id: 0,
        name: 'Happy Emoticon',
        label: 'Happy',
        emoticonCanvasID: 'happy-emoticon-canvas' ,
        emoticonLabelID: 'happy-emoticon-label',
        emoticonQuote: 'Ini Quote ketika user klik emoticon Happy',
        emoticonPlay: false,
        emoticonAnimation: happyEmoticonAnimated,
    },

    {
        id: 1,
        name: 'Indifferent Emoticon',
        label: 'Indifferent',
        emoticonCanvasID: 'indifferent-emoticon-canvas' ,
        emoticonLabelID: 'indifferent-emoticon-label',
        emoticonQuote: 'Ini Quote ketika user klik emoticon Indifferent',
        emoticonPlay: false,
        emoticonAnimation: indifferentEmoticonAnimated,
    },

    {
        id: 2,
        name: 'Sad Emoticon',
        label: 'Sad',
        emoticonCanvasID: 'sad-emoticon-canvas' ,
        emoticonLabelID: 'sad-emoticon-label',
        emoticonQuote: 'Ini Quote ketika user klik emoticon Sad',
        emoticonPlay: false,
        emoticonAnimation: sadEmoticonAnimated,
    },

    {
        id: 3,
        name: 'Angry Emoticon',
        label: 'Angry',
        emoticonCanvasID: 'angry-emoticon-canvas' ,
        emoticonLabelID: 'angry-emoticon-label',
        emoticonQuote: 'Ini Quote ketika user klik emoticon Angry',
        emoticonPlay: false,
        emoticonAnimation: angryEmoticonAnimated,
    },

    {
        id: 4,
        name: 'Anxious Emoticon',
        label: 'Anxious',
        emoticonCanvasID: 'anxious-emoticon-canvas' ,
        emoticonLabelID: 'anxious-emoticon-label',
        emoticonQuote: 'Ini Quote ketika user klik emoticon anxious',
        emoticonPlay: false,
        emoticonAnimation: anxiousEmoticonAnimated,
    },
];
 
export const happyEmotion = emoticonData[0];
export const indifferentEmotion = emoticonData[1];
export const sadEmotion = emoticonData[2];
export const angryEmotion = emoticonData[3];
export const anxiousEmotion = emoticonData[4];
