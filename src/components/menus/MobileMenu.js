import { useState } from "react";

const MobileMenu = () => {

    const mobileMenus = [
        {
            name: 'Home',
            href: '#home',
            icon: 'ios-home',
            dis: '-translate-x-[8.2rem]'
        },

        {
            name: 'About',
            href: '#about',
            icon: 'person',
            dis: '-translate-x-11'
        },

        {
            name: 'Projects',
            href: '#projects',
            icon: 'book',
            dis: 'translate-x-11'
        },

        {
            name: 'Contact',
            href: '#contact',
            icon: 'ios-mail',
            dis: 'translate-x-[8.3rem]'
        },
    ];

    const [active, setActive] = useState(0);

    return (
        <div className="bg-white max-h-20 rounded-t-xl">
            <ul className="flex relative w-screen justify-center gap-6">
                <span className={`w-16 h-16 bg-rose-600 border-4 border-gray-900 absolute -top-5 rounded-full duration-500 ${mobileMenus[active].dis}`}>
                    <span className="w-4 h-4 bg-transparent absolute top-4 -left-5 rounded-tr-xl shadow-myShadow1"></span>

                    <span className="w-4 h-4 bg-transparent absolute top-4 -right-5 rounded-tl-xl shadow-myShadow2"></span>
                </span>

                {
                    mobileMenus.map((mobileMenu, i) =>(
                        <li key={i} className="w-16">
                            <a href={mobileMenu.href} className="flex flex-col text-center pt-6" onClick={() => setActive(i)}>
                                <span className={`text-3xl cursor-pointer duration-500 ${i === active && '-mt-6 text-white text-4xl'}`}>
                                    <ion-icon name={mobileMenu.icon}></ion-icon>
                                </span>

                                <span className={`${active === i ? 'translate-y-3 duration-700 opacity-100' : 'opacity-0 translate-y-10'}`}>{mobileMenu.name}</span>
                            </a>
                        </li>
                    ))
                }
            </ul>
        </div>
    )

}

export default MobileMenu