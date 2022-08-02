
import HeroSection from './components/body/hero-section/HeroSection';
import MobileMenu from './components/menus/MobileMenu';
import SwitchModeButton from './components/SwitchModeButton';
import './style/App.css';

function App() {
  return (
    <div className="App">
      
      <section className='p-8 pt-32 md:p-14 md:pt-40 md:mb-[21rem] md:min-w-full md:h-9 lg:p-32' id='home'>
        <HeroSection />
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
