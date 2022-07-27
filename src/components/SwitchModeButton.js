
import React from 'react';
import lottie from "lottie-web";
import lightDarkAnimate from './../assets/animations/light-dark.json';

const SwitchModeButton = () => {

    React.useEffect(() => {
        const checkbox = document.querySelector('#toggle');
        const html = document.querySelector('html');

        const lightDark = lottie.loadAnimation({
            container: document.querySelector("#light-dark"),
            animationData: lightDarkAnimate,
            renderer: 'svg',
            loop: false,
            autoplay: false,
            name: "Light and Dark Mode",
        });

        checkbox.addEventListener('click', function() {
            if(checkbox.checked) {
                html.classList.add('dark');
                lightDark.playSegments([0, 25], true);
                localStorage.theme = 'dark';
            }else {
                html.classList.remove('dark');
                lightDark.playSegments([30, 50], true);
                localStorage.theme = 'light';
            }
        });

        if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
            checkbox.checked = true;
            lightDark.goToAndStop(25, true) 
        } else {
            checkbox.checked = false;
        }
    }, []);
    

    return (
        <div>
            <input type="checkbox" id="toggle" className="hidden" />
            <label htmlFor="toggle" id="light-dark" className="z-10 block w-12 md:w-14 cursor-pointer fixed top-4 md:top-auto md:bottom-5 right-5"></label>
        </div>
    )

}

export default SwitchModeButton