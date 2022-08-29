
import React from 'react';
import HeroSection from './components/body/hero-section/HeroSection';
import AboutSection from './components/body/about-section/AboutSection';
import MobileMenu from './components/menus/MobileMenu';
import SwitchModeButton from './components/SwitchModeButton';
import './style/App.css';
import ContactSection from './components/body/contact-section/ContactSection';

function App() {
  React.useEffect(() => {
    window.onscroll = function() {
        // const header = document.querySelector('header');
        // const fixedHeader = header.offsetTop;

        // if(window.pageYOffset > fixedHeader) {
        //   header.classList.add('header-fixed')
        // }else {
        //   header.classList.remove('header-fixed')
        // }
        

        const windowWidth = window.innerWidth;
        const elementWrapper = document.querySelector('#element-wrapper')
        const horLength = elementWrapper.scrollWidth;
        const horizontalSection = document.querySelector('#horizontal-section');
        const distFromTop = horizontalSection.offsetTop;
        const scrollDistance = distFromTop + horLength - windowWidth;

        horizontalSection.style.height = horLength + "px";

        window.onscroll = function() {
            const scrollTop = window.pageYOffset;

            if (scrollTop >= distFromTop && scrollTop <= scrollDistance) {
                elementWrapper.style.transform = "translateX(-"+(scrollTop - distFromTop)+"px)";
            }
        }
    }
  }, []);

  return (
    <div className="App">
      
      <section className='p-8 pt-20 md:p-14 md:pt-40 md:mb-[21rem] md:min-w-full md:h-9 lg:p-32' id='home'>
        <HeroSection />
      </section>

      <section>
        <AboutSection />
      </section>

      <section className='p-8 pt-20'>
        <ContactSection />
      </section>

      <section>
        <SwitchModeButton /> {/* Light and Dark Mode Button Componnent */}
      </section>

      <section className='block fixed bottom-0 md:hidden'>
        {/* <MobileMenu /> */}
      </section>

    </div>
  );
}

export default App;
