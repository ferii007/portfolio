
import {parallaxDarkModeData, parallaxLightModeData} from './../../../data/Footer'
import { useEffect } from 'react'


const Footer = () => {

    useEffect(() => {
        const parallaxImageSection = document.querySelector('#parallax-image-section');

        const cloud1DarkModeID = document.querySelector('#cloud-1-dark-mode');
        const cloud2DarkModeID = document.querySelector('#cloud-2-dark-mode');
        const cloud3DarkModeID = document.querySelector('#cloud-3-dark-mode');
        const hill1DarkModeID = document.querySelector('#hill-1-dark-mode');
        const hill2DarkModeID = document.querySelector('#hill-2-dark-mode');
        const hill3DarkModeID = document.querySelector('#hill-3-dark-mode');
        const tree1DarkModeID = document.querySelector('#tree-1-dark-mode');
        const tree2DarkModeID = document.querySelector('#tree-2-dark-mode');
        const roadDarkModeID = document.querySelector('#road-dark-mode');

        const hill1LightModeID = document.querySelector('#hill-1-light-mode');
        const hill2LightModeID = document.querySelector('#hill-2-light-mode');
        const hill3LightModeID = document.querySelector('#hill-3-light-mode');
        const tree1LightModeID = document.querySelector('#tree-1-light-mode');
        const tree2LightModeID = document.querySelector('#tree-2-light-mode');
        const roadLightModeID = document.querySelector('#road-light-mode');
        
        document.addEventListener('scroll', function() {
            if (parallaxImageSection.getBoundingClientRect().top < 0) {
                let parallax = parallaxImageSection.getBoundingClientRect().top;

                cloud1DarkModeID.style.left = parallax * -0.2 + 'px';
                cloud2DarkModeID.style.left = parallax * -0.2 + 'px';
                cloud3DarkModeID.style.left = parallax * 0.2 + 'px';
                hill1DarkModeID.style.top = parallax * -0.3 + 'px';
                hill2DarkModeID.style.top = parallax * -0.1 + 10 + 'px';
                hill3DarkModeID.style.top = parallax * -0.1 + 'px';
                tree2DarkModeID.style.top = parallax * -0.2 + 'px';
                tree1DarkModeID.style.top = parallax * -0.1 + 'px';
                roadDarkModeID.style.top = parallax * -0.1 + 'px';

                hill1LightModeID.style.top = parallax * -0.3 + 'px';
                hill2LightModeID.style.top = parallax * -0.1 + 10 + 'px';
                hill3LightModeID.style.top = parallax * -0.1 + 'px';
                tree2LightModeID.style.top = parallax * -0.2 + 'px';
                tree1LightModeID.style.top = parallax * -0.1 + 'px';
                roadLightModeID.style.top = parallax * -0.1 + 'px';
            }
        })

    }, []);

    return(
        <div id='parallax-image-section'>
            <div className='relative'>
                <div className='hidden dark:block relative h-96 lg:h-[40rem] before:absolute before:bottom-0 before:w-full before:bg-gradient-dark before:h-[100px] before:z-10'>
                    {
                        parallaxDarkModeData.map((parallaxDarkMode) => (
                            <img 
                                key={parallaxDarkMode.id}
                                src={parallaxDarkMode.imageSrc}
                                alt={parallaxDarkMode.name}
                                id={parallaxDarkMode.imageID}
                                className='w-full h-96 lg:h-full absolute object-cover'
                            />
                        ))
                    }
                </div>

                <div className='block dark:hidden relative h-96 lg:h-[40rem] before:absolute before:bottom-0 before:w-full before:bg-gradient-light before:h-[100px] before:z-10'>
                    {
                        parallaxLightModeData.map((parallaxLightMode) => (
                            <img 
                                key={parallaxLightMode.id}
                                src={parallaxLightMode.imageSrc}
                                alt={parallaxLightMode.name}
                                id={parallaxLightMode.imageID}
                                className='w-full h-96 lg:h-full absolute object-cover'
                            />
                        ))
                    }
                </div>

                <div className='text-justify bg-[#5A541C] dark:bg-slate-900 py-10 px-6 lg:px-20 text-white relative'>
                    <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae tempore repellendus voluptatibus natus maxime nihil, dolores impedit vitae mollitia repellat necessitatibus reprehenderit minus at aliquid corrupti excepturi sed maiores debitis ex! Voluptas nostrum enim eos, debitis sequi, fugiat quo, ut harum aliquam asperiores impedit quisquam. Velit sunt cum culpa recusandae eligendi veniam vitae harum minus dolorum necessitatibus fuga, labore eveniet, ex excepturi odio modi nihil provident. Architecto officiis deserunt porro dolore. Cupiditate reprehenderit obcaecati nostrum labore autem! Dolor ullam placeat molestiae sequi repudiandae similique exercitationem, dignissimos illum pariatur incidunt ipsum nisi, architecto omnis consequatur voluptate iste itaque ipsam aliquam quos dolorem officia. Explicabo a nostrum praesentium corrupti voluptate rem, dolorem, commodi exercitationem, consequuntur aliquam perspiciatis voluptatem laboriosam. Odio laboriosam assumenda expedita nesciunt dolorem voluptas ad animi modi, nemo, cupiditate dolor enim at maxime laudantium? Repellendus quaerat enim provident nesciunt sint ab. Voluptatum aperiam aliquid dolore nulla, dolorum cupiditate. Officiis laudantium consequatur facilis. Neque obcaecati explicabo accusantium asperiores veniam dolores, error eveniet omnis voluptatem labore provident a nostrum aspernatur, sed magni suscipit magnam dolor? Beatae sapiente, eius nihil tempora accusamus illum cupiditate nostrum laborum enim facilis reiciendis eligendi architecto, cumque quia pariatur? Dolorem laboriosam maxime non nobis eum pariatur eligendi in?</p>
                </div>
            </div>
        </div>
    )

}

export default Footer